import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Logo from '../../assets/log.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import {
  Conteiner,
  Form,
  LeftContainer,
  InputConteiner,
  RightContainer,
  Title,
  Link,
} from './styles';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O nome é Obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail valido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Comfirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/user', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (status === 200 || status === 201) {
        toast.success('Cadastro efetuado com sucesso !');
      } else if (status === 400) {
        toast.error('Email já cadastrado! Faça o Login para continuar');
      } else {
        throw new Error();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Falhar no sitema! Tente novamente');
    }
  };

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
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputConteiner>

          <InputConteiner>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputConteiner>
          <InputConteiner>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputConteiner>

          <InputConteiner>
            <label>Confirmar Senha </label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputConteiner>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>
          Já possui conta?<Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Conteiner>
  );
}
