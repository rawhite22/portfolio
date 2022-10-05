import { createContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

export const ThemeContext = createContext()
export const ThemeContextReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return { ...state, theme: 'dark' }
    case 'LIGHT':
      return { ...state, theme: 'light' }
    case 'ROUTE_CHANGE_START':
      return { ...state, pageTransition: true }
    case 'ROUTE_CHANGE_COMPLETE':
      return { ...state, pageTransition: false }
    case 'SIDE_MENU_OPEN':
      return { ...state, sideMenu: true }
    case 'SIDE_MENU_CLOSED':
      return { ...state, sideMenu: false }
    case 'UPDATE_CURRENT_ROUTE':
      return { ...state, currentRoute: action.payload }
    default:
      return state
  }
}
export const ThemeContextProvider = ({ children, component }) => {
  const [state, dispatch] = useReducer(ThemeContextReducer, {
    theme: null,
    pageTransition: false,
    sideMenu: false,
    currentRoute: '/',
  })
  const { events } = useRouter()
  useEffect(() => {
    const handleStart = () => {
      dispatch({ type: 'SIDE_MENU_CLOSED' })
      dispatch({ type: 'ROUTE_CHANGE_START' })
    }
    const handleComplete = () => {
      dispatch({ type: 'SIDE_MENU_CLOSED' })
      dispatch({ type: 'ROUTE_CHANGE_COMPLETE' })
    }
    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
  }, [])
  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
