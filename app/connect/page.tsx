import Link from "next/link";

type Props = {
  searchParams: Promise<{ connected?: string; error?: string }>;
};

const errors: Record<string, string> = {
  not_configured: "Discord connection is not configured yet. The site owner needs to add the OAuth environment variables.",
  cancelled: "You cancelled the Discord authorization.",
  invalid_state: "The authorization expired or could not be verified. Please try again.",
  token_exchange: "Discord could not complete the authorization. Please try again.",
  identity: "Villain couldn't read your Discord account. Please try again.",
  connection_update: "Discord authorized the connection but rejected the profile update. Check the app's OAuth configuration and try again.",
  unexpected: "Something went wrong. Please try again in a moment."
};

export default async function ConnectPage({ searchParams }: Props) {
  const params = await searchParams;
  const message = params.error ? errors[params.error] || errors.unexpected : null;

  return (
    <section className="page page-narrow">
      <p className="sample-label">VILLAIN / ACCOUNT</p>
      <h1>Connect your Discord.</h1>
      {params.connected === "1" ? (
        <>
          <p className="dek">Your Discord profile connection has been updated. Check your profile's Apps section.</p>
          <p><Link className="btn" href="/">Back to Villain</Link></p>
        </>
      ) : (
        <>
          <p className="dek">Connect your Discord account to show Villain on your profile. Discord will ask you to authorize the connection.</p>
          {message && <p role="alert" className="dek">{message}</p>}
          <p><a className="btn" href="/api/discord/connect">Connect with Discord</a></p>
          <p className="page-disclaimer">You'll be redirected to Discord to approve this connection. Villain only requests the permissions needed to publish its profile connection.</p>
        </>
      )}
    </section>
  );
}
