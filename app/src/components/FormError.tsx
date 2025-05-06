export default function FormError({ children }: {children:React.ReactNode}) {
    return (
        <div className="mb-4 text-red-600 font-semibold">
            {children}
        </div>
    );
}