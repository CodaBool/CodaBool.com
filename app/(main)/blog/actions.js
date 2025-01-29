'use server'
import { redirect } from 'next/navigation'
import { Client } from 'pg'

export async function addToNewsLetter(formData) {
  let response
  const email = formData.get("email")
  console.log("add email", email)
  const client = new Client({ connectionString: process.env.PG_URI, ssl: { rejectUnauthorized: false } })
  try {
    await client.connect()
    const res = await client.query('INSERT INTO newsletter(email) VALUES($1)', [email])
    console.log("inserted", res?.rowCount)
    await client.end()
    response = "sub=success"
  } catch (err) {
    await client.end()
    console.error(err)
    console.error("code", err.code)
    response = `err=${encodeURIComponent('Internal server error, please try again later')}`
    if (err.code === "23505") {
      console.error("duplicate email")
      response = `err=${encodeURIComponent('This email is already subscribed')}`
    }
  }
  redirect(`/blog?${response}`)

}
