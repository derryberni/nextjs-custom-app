import React from 'react'
import App from 'next/app'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let cookies = parseCookies(ctx)
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, cookies }
  }

  render () {
    const { Component, pageProps, router, cookies } = this.props

    if(router.route == '/about'){
      return (
        <Component {...pageProps} />
      )
    }else{
      return (
        <Layout {...cookies}>
          <Component {...pageProps} />
        </Layout>
      )
    }
  }
}
