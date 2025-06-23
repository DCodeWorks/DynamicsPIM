export default function Users(){
    return (
        <div>
            <ul className=" list-disc">
                <li>Add new user</li>
                <li>edit new user</li>
                <li>remove user</li>
                <li>roles: admin, user(has has visibility to his stores); admin has full visibility + can edit settings</li>
                <li>login through office 365 account but roles managed by this UI page</li>
            </ul>
        </div>
    );
}