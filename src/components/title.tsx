
type Props = {
    children: string
}

export function Title({children}: Props) {

    return (
        
        <h2 className="text-amber-400 text-4xl font-bold">{children}</h2>
        
    )
}