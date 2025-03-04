import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Components/LayoutArea/Layout/Layout.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.ts'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        {/* Connect the store object to useSelector: */}
        <Provider store={store}>
            <Layout />
        </Provider>

    </BrowserRouter>,
)
