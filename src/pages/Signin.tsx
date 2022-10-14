import { Heading } from '../componentes/Heading';
import { Logo } from '../componentes/logo';
import { Text } from '../componentes/text';
import { TextInput} from '../componentes/TextInput';
import {Envelope,Lock} from 'phosphor-react';
import { Checkbox } from '../componentes/CheckBox';
import { Button } from '../componentes/button';
import { FormEvent, useState } from 'react';
import axios from 'axios'

export function SignIn() {

    const [isUserSingnedIn, setIsUserSinged] = useState(false)

    function handleSignUIn(event: FormEvent) {
        event.preventDefault();

        axios.post('/sessions', {
            email: 'juanfila@hotmail.com',
            password: '123123',
        })

        setIsUserSinged(true)
    }

    return(
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
      <Logo/>

      <Heading size='lg' className='mt-4'>
        Ignite Lab
      </Heading>

      <Text size='lg' className='text-gray-400 mt-2'>Faça login e comece a usar!</Text>
      </header>

      <form onSubmit={handleSignUIn} className='flex flex-col items-stretch w-full max-w-sm mt-10'>
        {isUserSingnedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail'/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='**********'/>
          </TextInput.Root>
          </label>

          <label htmlFor='remeber' className='flex items-center gap-2 mt-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-6'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha  ?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta ? Crie uma agora</a>
        </Text>
      </footer> 
      </div>
    )
}