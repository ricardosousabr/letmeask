import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


import ilustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'


export function Home() {
  const Navigate = useNavigate()
  const { user, singInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await singInWithGoogle()
    }

    Navigate("./rooms/new")
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire duvidas de suas audiências em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-rom">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre e, uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
          </form>
          <Button type="submit" >
            Entrar na sala
          </Button>
        </div>
      </main>
    </div>
  )
}