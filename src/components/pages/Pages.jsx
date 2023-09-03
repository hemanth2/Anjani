import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Map from "../map/Map"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Plots from "../plots/plots"
import Login from "../login"
import Upload from "../Upload"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/Map' component={Map} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/plots' component={Plots} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/upload' component={Upload} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
