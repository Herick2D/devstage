'use client'; // dá acesso ao js para o lado do cliente
/*
Next.js por padrão trabalha com js server side, ou seja, o código é executado no servidor e depois é enviado para o cliente.
Quando usamos o 'use client' o código é executado no lado do cliente, ou seja, no navegador do usuário.
Isso é útil para quando queremos fazer alguma operação que só pode ser feita no lado do cliente, como por exemplo, manipular o DOM.
Dessa forma o ideal é componentizar o código dividindo em partes que são executadas no servidor e partes que são executadas no cliente.
*/

import { Copy, Link } from 'lucide-react';
import { IconButton } from '../components/icon-button';
import { InputField, InputIcon, InputRoot } from '../components/input';

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
