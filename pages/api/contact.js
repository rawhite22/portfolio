const nodemailer = require('nodemailer')
export default async function (req, res) {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'robert.a.white625@gmail.com',
        pass: process.env.GMAIL,
      },
      secure: true,
    })
    const mailData = {
      from: 'demo@demo.com',
      to: 'robert.a.white625@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message,
      html: `<div><h2>${req.body.message}</h2><p>${req.body.email}</p></div>`,
    }
    let i = await transporter.sendMail(mailData)
    if (i.rejected.length > 0) {
      transporter.close()
      throw new Error('Could not send E-Mail')
    }
    transporter.close()
    res.status(200).json({ msg: 'success' })
  } catch (error) {
    res.status(400).json({ msg: 'failed' })
  }
}
