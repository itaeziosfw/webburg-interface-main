import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";


import Logo from '../../assets/log.svg';
import  {Button} from '../../components/Button';
import { api } from "../../services/api";


import {
  Conteiner,
  Form,
  LeftContainer,
  InputConteiner,
  RightContainer,
  Title,
  Link,
  
  
  
  
  
  

  


  
  
  
  
  
} from './styles';





export function Login() {
 
  const schema = yup
  .object({
    email: yup.string()
    .email('Digite um e-mail valido')
    .required('O email é obrigatório'),
    password: yup.string()
    .min(6,'A senha deve ter pelo menos 6 caracteres')
    .required('Digite uma senha'),
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
  api.post('/session',{
    email: data.email,
    password: data.password,
  }),

  {
    pending: 'Verificando Seus dados',
    success: 'Seja Bem-Vindo (a) 👌',
    error: 'Email ou senha Incorretos 🤯'
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
        <Title>
          Olá, sela bem vindo ao <span>Dev Burguer!</span>
          <br/>
          Acesse com seu  
           <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button  type="submit" >Entrar</Button>
        </Form>
        <p>Não possui conta?:;<Link> Clique aqui </Link> </p>
      </RightContainer>
    </Conteiner>
  );
}