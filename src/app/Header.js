import Link from 'next/link'

function Header(){
    
    return (
        <>
            <h1 className='App-header'>Periodic Tabletop!</h1>
            <Link href="/signUpIn/">Sign up</Link>
        </>
    )
}

export default Header;