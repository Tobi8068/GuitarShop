export default function ProfileLayout({
    children,
  }) {
    return (
      <div className="w-full px-5 flex flex-col gap-2 my-6 md:my-6 md:px-0 md:w-3/4  md:mx-auto">
        {children}
      </div>
    )
}