'use client'

import React from 'react'

import AlertDialogDemo from '@/components/docs/overlays/alert-dialog-demo'
import ModalDemo from '@/components/docs/overlays/modal-demo'
import { Container } from 'ui'

export default function Page() {
  return (
    <Container>
      <div className="py-24 gap-6">
        <div className="prose dark:prose-invert">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium, aliquam blanditiis commodi,
            consequatur, corporis doloribus eos error esse eveniet facilis id itaque labore necessitatibus nostrum
            praesentium saepe veniam.
          </p>
          <p>
            Aliquid atque delectus dicta dignissimos distinctio doloribus incidunt, laboriosam laborum magnam officiis
            perspiciatis, quasi quia quisquam reprehenderit similique temporibus ut velit voluptate. Accusantium nam
            omnis repudiandae sed soluta, vel voluptas?
          </p>
          <p>
            Accusantium ad aliquam at, commodi deserunt ea et exercitationem expedita inventore ipsam nesciunt nobis
            officia quia ratione velit. Consectetur consequatur ducimus earum eligendi maiores modi perspiciatis
            quibusdam reiciendis repellat sunt.
          </p>
          <p>
            Aliquid blanditiis commodi deserunt distinctio dolor dolore enim explicabo facilis fugiat fugit ipsa iste
            maiores molestiae nam, nemo optio porro quae quia quis rem repellat rerum sequi ullam voluptas voluptatum!
          </p>
          <p>
            Adipisci aspernatur blanditiis corporis cumque cupiditate eligendi, et facilis fugit iusto laboriosam libero
            molestias nam neque nobis odio porro quae quaerat quisquam reprehenderit saepe sapiente sit tempore vel
            voluptas voluptatibus.
          </p>
          <p>
            Aspernatur autem dignissimos provident quibusdam quidem quos ratione. Aliquam, atque, earum! Adipisci eos
            incidunt laudantium minus possimus. Aperiam consectetur consequuntur cumque dolore eaque earum ipsa
            laudantium, omnis quas sunt velit.
          </p>
          <p>
            Accusantium autem consectetur cumque debitis, dicta dolorem esse illo inventore itaque magnam placeat rem
            sit temporibus unde veritatis. Cupiditate delectus ducimus explicabo id impedit itaque maxime molestiae
            officia, quis sed.
          </p>
          <p>
            Ad amet aperiam architecto dicta, expedita nemo officiis quas sed unde. Assumenda facilis fugit inventore
            ipsam ipsum laboriosam minus nulla perferendis placeat quibusdam saepe soluta, tenetur veritatis vitae
            voluptatum. Vitae.
          </p>
          <p>
            Dignissimos dolor exercitationem ipsa labore quos sed ut. Aspernatur blanditiis error id officiis quas
            quidem quod tempora. Cum, dicta doloribus ducimus impedit incidunt laboriosam, minima modi neque pariatur
            porro tempora.
          </p>
          <p>
            Aliquam delectus laboriosam voluptas voluptatem. Accusantium atque deleniti ducimus ea eius enim, est
            explicabo harum id ipsum laudantium, modi nulla, quas quia quidem sapiente voluptatem. At consequuntur
            quibusdam quos sunt!
          </p>

          <AlertDialogDemo />
          <ModalDemo />
        </div>
      </div>
    </Container>
  )
}
