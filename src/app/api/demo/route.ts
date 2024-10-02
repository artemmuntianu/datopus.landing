import { MailtrapClient } from "mailtrap"

export async function GET() {
    const TOKEN = "5cc9cff8175823a19a96e9cc1c20b5b6";
    const SENDER_EMAIL = "noreply@datopus.io";
    const RECIPIENT_EMAIL = "artemmuntianu@gmail.com";

    const client = new MailtrapClient({
        token: TOKEN,
        testInboxId: 3176650
    });

    const sender = { name: "Datopus", email: SENDER_EMAIL };
    let resp;
    await client
        .testing
        .send({
            from: sender,
            to: [{ email: RECIPIENT_EMAIL }],
            subject: "Hello from Datopus!",
            text: "Welcome to Datopus!"
        })
        .then((val) => {
            console.log(val);
            resp = new Response(null, {
                status: 200,
                headers: { 'Set-Cookie': `dr=a@a.io` }
            });
        })
        .catch((val) => {
            console.error(val);
            resp = new Response(val, {
                status: 500
            });
        });

    return resp;
}