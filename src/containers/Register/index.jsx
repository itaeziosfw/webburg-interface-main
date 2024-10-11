import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"

import Logo from '../../assets/log.svg'
import  {Button} from '../../components/Button';
import { api } from "../../services/api";

import {
  Conteiner,
  Form,
  LeftContainer,
  InputConteiner,
  RightContainer,
  Title,
  
} from './styles';



export function Register() {
 
  const schema = yup
  .object({
    name: yup.string().required('O nome é Obrigatório'),
    email: yup.string()
    .email('Digite um e-mail valido')
    .required('O email é obrigatório'),
    password: yup.string()
    .min(6,'A senha deve ter pelo menos 6 caracteres')
    .required('Digite uma senha'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')],'As senhas devem ser iguais')
    .required('Comfirme sua senha'),
   
  })
  .required()



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  console.log(errors)

const onSubmit = async (data) => {
 const response =await toast.promise(
  api.post('/user',{
    name:data.name,
    email: data.email,
    password: data.password,
  }),

  {
    pending: 'Verificando Seus dados',
    success: 'Cadastro efetuado com sucesso 👌',
    error: 'Ops,algo deu errado! Tente novamente. 🤯'
  },
   
);

  
  
  console.log(response)
  
  }



  return (
    <Conteiner>
      <LeftContainer>

        <img src={Logo} alt="logo-devbuguer" />
        </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
         
        <InputConteiner>
            <label>Nome</label>
            <input type="text"{...register("name")} />
            <p>{errors.name?.message}</p>
            </InputConteiner>


         
          <InputConteiner>
            <label>Email</label>
            <input type="email"{...register("email")} />
            <p>{errors.email?.message}</p>
          </InputConteiner>
          <InputConteiner>
            <label>Senha</label>
            <input type="password"{...register("password")} />
            <p>{errors.password?.message}</p>

          </InputConteiner>


            
          <InputConteiner>
            <label>Confirmar Senha </label>
            <input type="password"{...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
          </InputConteiner>

          <Button  type="submit" >Criar Conta</Button>
        </Form>
        <p>Já possui conta?<a>Clique aqui.</a></p>
      </RightContainer>
    </Conteiner>
  );
}