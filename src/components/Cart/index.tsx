import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import Button from "../Button"
import SideBar from "../SideBar"
import * as S from './styles'
import { RootReducer } from "../../store"
import { formataPreco } from "../Product"
import { remove, trocaTela, close, clear } from "../../store/reducers/cart"
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const [ativo4, setAtivo4] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const cart = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (ativo4) {
      dispatch(trocaTela(4))
      dispatch(clear())
    }
    setAtivo4(false)
  }, [ativo4, dispatch, isSuccess])

  const renderizaId = () => {
    if (isSuccess && data) {
      return <>{data.orderId}</>
    }
    return <>####</>
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      end: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento:'',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mv: '',
      av: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(3, 'Nome inválido').required('Preencha este campo'),
      end: Yup.string().required('Preencha este campo'),
      cidade: Yup.string().required('Preencha este campo'),
      cep: Yup.string().required('Preencha este campo'),
      numero: Yup.string().required('Preencha este campo'),
      nomeCartao: Yup.string().required('Preencha este campo').min(3, 'Nome inválido'),
      numeroCartao: Yup.string().required('Preencha este campo'),
      cvv: Yup.string().required('Preencha este campo'),
      mv: Yup.string().required('Preencha este campo'),
      av: Yup.string().required('Preencha este campo')
    }),
    onSubmit: (values) => {
      purchase({
        products : cart.items.map(item => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.nome,
          address: {
            description: values.end,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mv),
              year: Number(values.av)
            }
          }
        }
      })
      setAtivo4(true)
      values.nome = ''
      values.end = ''
      values.cidade = ''
      values.cep = ''
      values.numero = ''
      values.complemento =''
      values.nomeCartao = ''
      values.numeroCartao = ''
      values.cvv = ''
      values.mv = ''
      values.av = ''
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isInvalid && isTouched) return message
    return ''
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const amount = () => {
    return cart.items.reduce((acumulador, valorAtual) => {
      return acumulador += valorAtual.preco
    }, 0)
  }

  const elementoCart = (): JSX.Element => {
    if (cart.items.length > 0) {
      return <>
        <S.CartList>
      {cart.items.map(item =>
        <S.CartItem key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <div>
            <h3>{item.nome}</h3>
            <span>{formataPreco(item.preco)}</span>
          </div>
          <button type="button" onClick={() => removeItem(item.id)} />
        </S.CartItem>
      )}
    </S.CartList>
    <S.Amount>
      <p>Valor total</p>
      <span>{formataPreco(amount())}</span>
    </S.Amount>
    <S.ButtonsDiv>
      <Button fullWidth={true} onClick={() => dispatch(trocaTela(2))}>Continuar com a entrega</Button>
      <Button fullWidth={true} onClick={() => dispatch(close())}>Voltar</Button>
    </S.ButtonsDiv>
      </>
    }else {
      return <>
        <S.NenhumProduto>Nenhum produto no carrinho</S.NenhumProduto>
      </>
    }
  }

  const elementoEntrega = (): JSX.Element => {
    return <>
    <S.Titulo>
      Entrega
    </S.Titulo>
    <form onSubmit={form.handleSubmit}>
      <S.Campo>
        <label htmlFor="nome">Quem irá receber</label>
        <input id="nome" type="text" name='nome' value={form.values.nome} onChange={form.handleChange} onBlur={form.handleBlur} />
        <small>{getErrorMessage('nome', form.errors.nome)}</small>
      </S.Campo>
      <S.Campo>
        <label htmlFor="end">Endereço</label>
        <input id="end" type="text" name='end' value={form.values.end} onChange={form.handleChange} onBlur={form.handleBlur} />
        <small>{getErrorMessage('end', form.errors.end)}</small>
      </S.Campo>
      <S.Campo>
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" type="text" name='cidade' value={form.values.cidade} onChange={form.handleChange} onBlur={form.handleBlur} />
        <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
      </S.Campo>
      <S.CepNumDiv>
        <S.Campo>
          <label htmlFor="cep">CEP</label>
          <InputMask mask="99999-999" id="cep" type="text" name='cep' value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('cep', form.errors.cep)}</small>
        </S.Campo>
        <S.Campo>
          <label htmlFor="numero">Número</label>
          <input id="numero" type="text" name='numero' value={form.values.numero} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('numero', form.errors.numero)}</small>
        </S.Campo>
      </S.CepNumDiv>
      <S.Campo>
        <label htmlFor="complemento">Complemento (opcional)</label>
        <input id="complemento" type="text" name='complemento' value={form.values.complemento} onChange={form.handleChange} onBlur={form.handleBlur} />
      </S.Campo>
      <S.ButtonsDiv>
        <Button fullWidth={true} onClick={() => dispatch(trocaTela(3))}>Continuar com o pagamento</Button>
        <Button fullWidth={true} onClick={() => dispatch(trocaTela(1))}>Voltar para o carrinho</Button>
      </S.ButtonsDiv>
    </form>
  </>
  }

  const elementoPagamento = (): JSX.Element => {
    return <>
    <S.Titulo>
      Pagamento - Valor total {formataPreco(amount())}
    </S.Titulo>
    <form onSubmit={form.handleSubmit}>
      <S.Campo>
        <label htmlFor="nomeCartao">Nome do cartão</label>
        <input id="nomeCartao" type="text" name='nomeCartao' value={form.values.nomeCartao} onChange={form.handleChange} onBlur={form.handleBlur} />
        <small>{getErrorMessage('nomeCartao', form.errors.nomeCartao)}</small>
      </S.Campo>
      <S.NumCvvDiv>
        <S.Campo>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <InputMask mask="9999 9999 9999 9999" id="numeroCartao" type="text" name='numeroCartao' value={form.values.numeroCartao} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('numeroCartao', form.errors.numeroCartao)}</small>
        </S.Campo>
        <S.Campo>
          <label htmlFor="cvv">CVV</label>
          <InputMask mask="999" id="cvv" type="text" name='cvv' value={form.values.cvv} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
        </S.Campo>
      </S.NumCvvDiv>
      <S.CepNumDiv>
        <S.Campo>
          <label htmlFor="mv">Mês de vencimento</label>
          <InputMask mask="99" id="mv" type="text" name='mv' value={form.values.mv} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('mv', form.errors.mv)}</small>
        </S.Campo>
        <S.Campo>
          <label htmlFor="av">Ano de vencimento</label>
          <InputMask mask="9999" id="av" type="text" name='av' value={form.values.av} onChange={form.handleChange} onBlur={form.handleBlur} />
          <small>{getErrorMessage('av', form.errors.av)}</small>
        </S.Campo>
      </S.CepNumDiv>
      <S.ButtonsDiv>
        <Button tipo='submit' fullWidth={true}>Confirmar pagamento</Button>
        <Button fullWidth={true} onClick={() => dispatch(trocaTela(2))}>Voltar para edição de entrega</Button>
      </S.ButtonsDiv>
    </form>
  </>
  }

  const elementoConfirmacao = (): JSX.Element => {
    return <>
    <S.Titulo>
      Pedido realizado - {renderizaId()}
    </S.Titulo>
    <S.TextoConfirmacaoPedido>
    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
    <br />
    <br />
    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
    <br />
    <br />
    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    <br />
    <br />
    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    </S.TextoConfirmacaoPedido>
    <Button fullWidth={true} onClick={() => dispatch(close())}>Concluir</Button>
  </>
  }

  const renderizaTela = (): JSX.Element => {
    switch (cart.tela) {
      case 1:
        return elementoCart()
      case 2:
        return elementoEntrega()
      case 3:
        return elementoPagamento()
      case 4:
        return elementoConfirmacao()
      default:
        return <>erro</>
    }
  }

  return (
    <SideBar>
      {renderizaTela()}
    </SideBar>
  )
}

export default Cart
