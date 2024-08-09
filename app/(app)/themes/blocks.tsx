import { LoginRootForm } from '@/app/(app)/themes/blocks/forms/login-root-form'
import { LoginSocial } from '@/app/(app)/themes/blocks/forms/login-social'

import { LoginForm } from './blocks/forms/login-form'

export function Blocks() {
  return (
    <div className="grid items-start grid-cols-3 gap-2">
      <LoginForm />
      <LoginRootForm />
      <LoginSocial />
    </div>
  )
}
