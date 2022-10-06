import Head from 'next/head'

function HeadComponent({ title, desc }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}
export default HeadComponent
