import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Map from "../map/Map"
import Contact from "../contact/Contact"
import Plots from "../plots/plots"
import Login from "../login"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Map' component={Map} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/plots' component={Plots} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
