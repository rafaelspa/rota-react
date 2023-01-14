import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import About from "./routes/Home/About"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Book from "./routes/Home/Product/Book"
import Computer from "./routes/Home/Product/Computer"
import Electronic from "./routes/Home/Product/Electronic"
import NotFound from "./routes/Home/NotFound"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home"  element={<HomeBody />}/>
          <Route path="products">
            <Route index element={<Navigate to="computers" />} />
            <Route path="computers" element={<Computer />} />
            <Route path="electronics" element={<Electronic />} />
            <Route path="books" element={<Book />} />
          </Route>
          <Route path="about"  element={<About />}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
