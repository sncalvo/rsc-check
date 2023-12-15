import { TestChildren } from '../_components/TestChildren';

import { NonBinaryComponent } from '../_components/NonBinaryComponent';
import { ClientComponent } from '../_components/ClientComponent';

export default async function Page() {
  return (
    <div>
      <NonBinaryComponent />

      <TestChildren>
        <NonBinaryComponent />
      </TestChildren>

      <TestChildren>
        <ClientComponent />
      </TestChildren>
    </div>
  )
}
