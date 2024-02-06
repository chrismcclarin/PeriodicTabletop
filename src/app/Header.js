import Link from 'next/link'

function Header(){
    
    return (
        <>
            <h1 className='App-header'>Periodic Tabletop!</h1>
            <Link href="/signup/">Sign up</Link>
            <Link href="/signin/">Sign in</Link>
            <Link href="/userProfile/">Profile</Link>
            <Link href="/">Home</Link>
        </>
    )
}

export default Header;