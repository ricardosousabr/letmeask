import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth'

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useNavigate } from "react-router-dom";

export function NewRoom() {
  const { user } = useAuth()
  const [newRoom, setNewRooom] = useState("")
  const Navigate = useNavigate();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === ''){
      return (
        console.log("sala errada")
      );
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,

    })

    Navigate(`/rooms/${firebaseRoom.key}`);
  };

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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRooom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit" >
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

function userContext(AuthContext: any): { user: any } {
  throw new Error('Function not implemented.')
}
