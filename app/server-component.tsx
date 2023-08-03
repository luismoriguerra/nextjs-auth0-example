import { getSession, getAccessToken } from "@auth0/nextjs-auth0";

export default async function ServerComponent() {
  const session = await getSession();
  const accessToken = await getAccessToken();
  if (session) {
    return (
      <div className="border border-5 border-blue-600">
        <h3>Access Token</h3>
        <pre data-testid="server-component-at">
          {JSON.stringify(accessToken, null, 2)}
        </pre>
        <h3>User</h3>
        <pre data-testid="server-component">
          {JSON.stringify(session.user, null, 2)}
        </pre>
      </div>
    );
  }
  return <></>;
}
