import CMSNavBar from '../components/CMSNavBar'
import Provider from '../utils/Provider'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CMSNavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
