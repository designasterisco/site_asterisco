import * as React from "react"

type SvgProps = React.SVGProps<SVGSVGElement>

export const SiteIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="currentColor"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M7.988 9.444c0-.803.652-1.456 1.456-1.456H10.9a1.456 1.456 0 010 2.912H9.444a1.456 1.456 0 01-1.456-1.456zm7.279-1.456a1.456 1.456 0 000 2.912h1.455a1.456 1.456 0 100-2.912h-1.456zm12.07 16.622a1.456 1.456 0 10-2.643-1.22l-4.03 8.733a1.456 1.456 0 102.643 1.22l4.03-8.733zm-8.313 1.833a1.455 1.455 0 10-2.14-1.975l-2.687 2.912a1.455 1.455 0 000 1.974l2.687 2.91a1.456 1.456 0 002.14-1.974l-1.776-1.923 1.776-1.924zm12.092-1.975a1.456 1.456 0 00-2.14 1.974l1.776 1.924-1.776 1.924a1.455 1.455 0 102.14 1.974l2.687-2.911a1.455 1.455 0 000-1.974l-2.687-2.911z" />
      <path
        fillRule="evenodd"
        d="M41.468 15.266H6.532v24.746c0 .804.651 1.456 1.455 1.456h32.024c.804 0 1.456-.652 1.456-1.456V15.266zm0-7.278v4.367H6.532V7.988c0-.803.651-1.455 1.455-1.455h32.024c.804 0 1.456.651 1.456 1.455zm-37.846 0a4.367 4.367 0 014.366-4.366h32.024a4.366 4.366 0 014.367 4.366v32.024a4.366 4.366 0 01-4.367 4.367H7.988a4.367 4.367 0 01-4.366-4.367V7.988z"
        clipRule="evenodd"
      />
    </svg>
  )
}
