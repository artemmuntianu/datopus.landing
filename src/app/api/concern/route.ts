import { MailtrapClient } from "mailtrap"
import { createSupabaseClient } from "../../../lib/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { email, action } = await req.json();
    const sbClient = createSupabaseClient();

    let authResp = await sbClient
        .auth
        .signInWithPassword({
            email: 'landing_page_api@datopus.io',
            password: 'Q3#7@9E'
        });
    if (authResp.error) {
        console.error(authResp.error);
        return Response.error();
    }

    let { error, data } = await sbClient
        .from('landing_page_users')
        .select()
        .eq('email', email)
        .limit(1)
        .maybeSingle();
    if (error) {
        console.error(error);
        return Response.error();
    }

    if (data) {
        switch (action) {
            case 'startup_program':
                {
                    if (data.startup_requested !== null)
                        return Response.json({ msg: 'duplicate' });

                    let { error } = await sbClient
                        .from('landing_page_users')
                        .update({
                            startup_requested: new Date().toISOString()
                        })
                        .eq('email', email);
                    if (error) {
                        console.error(error);
                        return Response.error();
                    }
                }
                break;
            case 'affiliate_program':
                {
                    if (data.affiliate_requested !== null)
                        return Response.json({ msg: 'duplicate' });

                    let { error } = await sbClient
                        .from('landing_page_users')
                        .update({
                            affiliate_requested: new Date().toISOString()
                        })
                        .eq('email', email);
                    if (error) {
                        console.error(error);
                        return Response.error();
                    }
                }
                break;
        }
    } else {
        let { error } = await sbClient
            .from('landing_page_users')
            .insert({
                email,
                startup_requested: action == 'startup_program' ? new Date().toISOString() : null,
                affiliate_requested: action == 'affiliate_program' ? new Date().toISOString() : null
            });
        if (error) {
            console.error(error);
            return Response.error();
        }
    }

    return Response.json({ msg: 'success' });
}

/*
export async function POST() {
    let resp;

    sendEmailAsync()
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
*/

function sendEmailAsync() {
    const TOKEN = "5cc9cff8175823a19a96e9cc1c20b5b6";
    const SENDER_EMAIL = "noreply@datopus.io";
    const RECIPIENT_EMAIL = "artemmuntianu@gmail.com";

    const client = new MailtrapClient({
        token: TOKEN,
        testInboxId: 3176650
    });

    const sender = { name: "Datopus", email: SENDER_EMAIL };
    const recipients = [{ email: RECIPIENT_EMAIL }];

    return client
        .testing
        .send({
            from: sender,
            to: recipients,
            subject: "Hello from Datopus!",
            text: "Welcome to Datopus!"
        });
}