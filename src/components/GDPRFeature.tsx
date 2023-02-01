import { SVGAttributes } from "react";

export default function GDPRFeature() {
  return (
    <section className="container mt-24 mb-20 p-11 rounded-[1.2rem] flex gap-x-14 items-center bg-white border-[#DEE1E6] border">
      <h2 className="text-[2.25rem] font-extrabold whitespace-nowrap">
        Germany-based <br />
        &amp; GDPR Compliant
      </h2>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="flex gap-x-4 items-center">
          <div className="bg-neutral-300 w-15 h-15 shrink-0 rounded-md">
            <SecureIcon className="m-auto h-full" />
          </div>
          <p className="text-base text-[#64607D] font-bold">
            Data does not leave our servers
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="bg-neutral-300 w-15 h-15 shrink-0 rounded-md">
            <InfrastructureIcon className="m-auto h-full" />
          </div>
          <p className="text-base text-[#64607D] font-bold">
            Own infrastructure
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="bg-neutral-300 w-15 h-15 shrink-0 rounded-md">
            <DataCenterIcon className="m-auto h-full" />
          </div>
          <p className="text-base text-[#64607D] font-bold">
            Most renowned data centers
          </p>
        </div>
      </div>
    </section>
  );
}

const SecureIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7525 22.4857C15.033 23.0765 14.7837 23.7816 14.1943 24.0651C13.2532 24.5178 12.2602 24.8533 11.2375 25.0626H10.7625C0.502489 22.9844 -0.554291 10.8126 0.312489 4.70903C0.352568 4.37802 0.529207 4.07816 0.799345 3.88371C1.07098 3.69074 1.41092 3.61801 1.73749 3.68777C3.27531 3.96238 4.85763 3.8184 6.31991 3.27065C7.78204 2.7244 9.07047 1.7937 10.0501 0.576524C10.2787 0.28707 10.6305 0.119346 11.0001 0.125274C11.3742 0.125274 11.726 0.301913 11.9501 0.600274C12.9328 1.81152 14.2227 2.73629 15.6848 3.27958C17.1469 3.82286 18.7278 3.96388 20.2627 3.68777C20.5893 3.61801 20.9292 3.69074 21.2008 3.88371C21.471 4.07816 21.6476 4.37801 21.6877 4.70903C22.0499 7.75644 21.9385 10.8411 21.3552 13.8526C21.2246 14.5087 20.5863 14.9332 19.9302 14.8026C19.2741 14.6719 18.8495 14.0337 18.9802 13.3776C19.4285 11.0308 19.568 8.63519 19.3958 6.25259C16.2697 6.44853 13.2106 5.28921 11.0001 3.07009C8.76612 5.28181 5.6934 6.43073 2.55688 6.22884C2.27188 9.87448 2.21251 20.7163 11.0001 22.6874C11.7497 22.5256 12.4785 22.2777 13.1733 21.9511C13.7566 21.6676 14.4602 21.9051 14.7526 22.4855L14.7525 22.4857ZM23.16 13.544L17.0564 19.6954L14.3252 16.0379C13.9318 15.5139 13.1867 15.407 12.6627 15.8004C12.1387 16.1938 12.0318 16.9389 12.4252 17.4629L15.9877 22.2129C16.194 22.489 16.5102 22.6627 16.8545 22.6879H16.9377C17.2553 22.6864 17.5581 22.5588 17.7808 22.3316L24.9058 15.2066C25.3674 14.7405 25.366 13.988 24.8999 13.5263C24.4338 13.0647 23.6812 13.0662 23.2195 13.5323L23.16 13.544Z"
      fill="black"
    />
  </svg>
);

const InfrastructureIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="30"
    height="28"
    viewBox="0 0 30 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.99362 0.727478C7.86112 0.727478 7.73362 0.779977 7.6411 0.874979C7.54735 0.968729 7.49485 1.09623 7.49485 1.22874V7.72858H0.998534C0.866035 7.72858 0.737283 7.78108 0.643526 7.87483C0.549776 7.96983 0.496025 8.09733 0.497277 8.23108V10.9623C0.496026 11.0948 0.549776 11.2236 0.643526 11.3174C0.737277 11.4124 0.866026 11.4649 0.998534 11.4636H1.71853V26.2722H1.01105H0.962298C0.691046 26.2922 0.484793 26.5247 0.497305 26.796C0.511055 27.0672 0.738557 27.2797 1.01107 27.2722H28.9922H28.9909C29.1259 27.276 29.2559 27.2247 29.3522 27.1297C29.4484 27.036 29.5022 26.9073 29.5022 26.7722C29.5022 26.6385 29.4484 26.5097 29.3522 26.4147C29.2559 26.321 29.1259 26.2697 28.9909 26.2722H28.261V11.4636H28.981C29.256 11.4636 29.4797 11.2386 29.4785 10.9624V8.23109C29.4797 7.95484 29.256 7.72984 28.981 7.72859H22.4846V1.22875C22.4846 0.952502 22.2621 0.727504 21.9859 0.727504L7.99362 0.727478ZM8.49611 1.72873L21.4849 1.72748V26.2712L17.3688 26.2724V21.5812C17.3688 21.305 17.1438 21.0825 16.8675 21.0837H13.1101C12.8351 21.085 12.6126 21.3062 12.6113 21.5812V26.2724H8.49643L8.49611 1.72873ZM10.4524 3.53999C10.3186 3.53874 10.1911 3.59124 10.0961 3.68624C10.0024 3.77999 9.94986 3.90874 9.94986 4.04125V7.33501C9.95111 7.61001 10.1761 7.83376 10.4524 7.83251H13.686C13.961 7.83376 14.186 7.61001 14.1872 7.33501V4.04125C14.1885 3.90875 14.1347 3.78 14.041 3.68624C13.9472 3.59124 13.8185 3.53874 13.6859 3.53999H10.4524ZM16.2911 3.53999C16.0148 3.53999 15.7923 3.76499 15.7936 4.04124V7.335C15.7936 7.60875 16.0161 7.83125 16.2911 7.8325H19.5285C19.8023 7.83125 20.0248 7.60875 20.026 7.335V4.04124C20.0273 3.76499 19.8048 3.53999 19.5285 3.53999H16.2911ZM10.95 4.54124H13.1862V6.83375L10.95 6.8325V4.54124ZM16.7925 4.54124H19.0263V6.83375L16.7938 6.8325L16.7925 4.54124ZM1.49749 8.73004H7.49493V10.465L1.49877 10.4638L1.49749 8.73004ZM22.4837 8.73004H28.4773V10.465H22.4825L22.4837 8.73004ZM10.4511 9.3838L10.4523 9.38255C10.3186 9.3813 10.1911 9.43505 10.0961 9.5288C10.0023 9.62255 9.94983 9.7513 9.94983 9.88381V13.1776C9.95108 13.4538 10.1761 13.6763 10.4523 13.6751H13.6859C13.9609 13.6763 14.1859 13.4538 14.1872 13.1776V9.88381C14.1884 9.75131 14.1347 9.62256 14.0409 9.5288C13.9472 9.43505 13.8184 9.3813 13.6859 9.38255L10.4511 9.3838ZM16.2898 9.3838L16.2911 9.38255C16.0148 9.3838 15.7923 9.60755 15.7936 9.8838V13.1776C15.7936 13.4513 16.0161 13.6738 16.2911 13.6751H19.5285C19.8022 13.6738 20.0248 13.4513 20.026 13.1776V9.8838C20.0273 9.60755 19.8048 9.3838 19.5285 9.38255L16.2898 9.3838ZM10.9487 10.385L13.1862 10.3838V12.6788H10.9499L10.9487 10.385ZM16.7912 10.385H19.025L19.0263 12.6788H16.7937L16.7912 10.385ZM2.71765 11.4663L7.49525 11.4638V26.2724H2.72021L2.71765 11.4663ZM22.4828 11.4663H27.2591L27.2616 26.2727H22.4853L22.4828 11.4663ZM10.4002 15.2289C10.1452 15.2551 9.95022 15.4701 9.95022 15.7276V19.0201C9.95022 19.1538 10.0027 19.2813 10.0965 19.3751C10.1915 19.4701 10.319 19.5226 10.4527 19.5226H13.6863C13.8188 19.5226 13.9476 19.4701 14.0413 19.3751C14.1351 19.2813 14.1888 19.1538 14.1876 19.0201V15.7276C14.1863 15.4514 13.9613 15.2276 13.6863 15.2289H10.4527C10.4352 15.2276 10.4177 15.2276 10.4002 15.2289H10.4002ZM16.2428 15.2289H16.244C15.9878 15.2551 15.7928 15.4701 15.794 15.7276V19.0201C15.7928 19.2963 16.0153 19.5213 16.2915 19.5226H19.529C19.8052 19.5213 20.0277 19.2963 20.0265 19.0201V15.7276C20.0252 15.4526 19.8027 15.2301 19.529 15.2289H16.2915H16.244H16.2428ZM10.9503 16.2289H13.1865V18.5214L10.9503 18.5226V16.2289ZM16.7928 16.2289H19.0266V18.5214L16.7941 18.5226L16.7928 16.2289ZM13.6116 22.0839H16.3679V26.274L13.6116 26.2727V22.0839Z"
      fill="black"
    />
  </svg>
);

const DataCenterIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.3337 3.3338C24.2287 3.3338 23.3337 4.22881 23.3337 5.3338C23.3337 6.43755 24.2287 7.3338 25.3337 7.3338C26.4375 7.3338 27.3337 6.43755 27.3337 5.3338C27.3337 4.22881 26.4375 3.3338 25.3337 3.3338ZM25.3337 4.66631C25.7012 4.66631 26 4.96506 26 5.3338C26 5.70129 25.7012 6.00004 25.3337 6.00004C24.965 6.00004 24.6663 5.70129 24.6663 5.3338C24.6663 4.96507 24.965 4.66631 25.3337 4.66631V4.66631Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.3337 14C24.2287 14 23.3337 14.8963 23.3337 16C23.3337 17.1037 24.2287 18 25.3337 18C26.4375 18 27.3337 17.1037 27.3337 16C27.3337 14.8963 26.4375 14 25.3337 14ZM25.3337 15.3338C25.7012 15.3338 26 15.6325 26 16C26 16.3675 25.7012 16.6662 25.3337 16.6662C24.965 16.6662 24.6663 16.3675 24.6663 16C24.6663 15.6325 24.965 15.3338 25.3337 15.3338Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.3337 24.6663C24.2287 24.6663 23.3337 25.5625 23.3337 26.6663C23.3337 27.7713 24.2287 28.6663 25.3337 28.6663C26.4375 28.6663 27.3337 27.7713 27.3337 26.6663C27.3337 25.5625 26.4375 24.6663 25.3337 24.6663ZM25.3337 26C25.7012 26 26 26.2988 26 26.6663C26 27.035 25.7012 27.3337 25.3337 27.3337C24.965 27.3337 24.6663 27.035 24.6663 26.6663C24.6663 26.2988 24.965 26 25.3337 26Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 3.3338C18.8963 3.3338 18 4.22881 18 5.3338C18 6.43755 18.8963 7.3338 20 7.3338C21.1037 7.3338 22 6.43755 22 5.3338C22 4.22881 21.1037 3.3338 20 3.3338ZM20 4.66631C20.3675 4.66631 20.6662 4.96506 20.6662 5.3338C20.6662 5.70129 20.3675 6.00004 20 6.00004C19.6325 6.00004 19.3338 5.70129 19.3338 5.3338C19.3338 4.96507 19.6325 4.66631 20 4.66631V4.66631Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 14C18.8963 14 18 14.8963 18 16C18 17.1037 18.8963 18 20 18C21.1037 18 22 17.1037 22 16C22 14.8963 21.1037 14 20 14ZM20 15.3338C20.3675 15.3338 20.6662 15.6325 20.6662 16C20.6662 16.3675 20.3675 16.6662 20 16.6662C19.6325 16.6662 19.3338 16.3675 19.3338 16C19.3338 15.6325 19.6325 15.3338 20 15.3338V15.3338Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 24.6663C18.8963 24.6663 18 25.5625 18 26.6663C18 27.7713 18.8963 28.6663 20 28.6663C21.1037 28.6663 22 27.7713 22 26.6663C22 25.5625 21.1037 24.6663 20 24.6663ZM20 26C20.3675 26 20.6662 26.2988 20.6662 26.6663C20.6662 27.035 20.3675 27.3337 20 27.3337C19.6325 27.3337 19.3338 27.035 19.3338 26.6663C19.3338 26.2988 19.6325 26 20 26V26Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 4.66628H13.3337C13.7012 4.66628 14 4.36753 14 4.00004C14 3.63255 13.7012 3.3338 13.3337 3.3338H3.99998C3.63249 3.3338 3.33374 3.63255 3.33374 4.00004C3.33374 4.36753 3.63249 4.66628 3.99998 4.66628Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 15.3338H13.3337C13.7012 15.3338 14 15.035 14 14.6663C14 14.2988 13.7012 14.0001 13.3337 14.0001H3.99998C3.63249 14.0001 3.33374 14.2988 3.33374 14.6663C3.33374 15.035 3.63249 15.3338 3.99998 15.3338Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 26H13.3337C13.7012 26 14 25.7012 14 25.3337C14 24.965 13.7012 24.6663 13.3337 24.6663H3.99998C3.63249 24.6663 3.33374 24.965 3.33374 25.3337C3.33374 25.7012 3.63249 26 3.99998 26Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 7.33379H13.3337C13.7012 7.33379 14 7.03504 14 6.6663C14 6.29881 13.7012 6.00006 13.3337 6.00006H3.99998C3.63249 6.00006 3.33374 6.29881 3.33374 6.6663C3.33374 7.03504 3.63249 7.33379 3.99998 7.33379Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 18H13.3337C13.7012 18 14 17.7013 14 17.3338C14 16.9651 13.7012 16.6663 13.3337 16.6663H3.99998C3.63249 16.6663 3.33374 16.9651 3.33374 17.3338C3.33374 17.7013 3.63249 18 3.99998 18Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.99998 28.6663H13.3337C13.7012 28.6663 14 28.3675 14 28C14 27.6326 13.7012 27.3338 13.3337 27.3338H3.99998C3.63249 27.3338 3.33374 27.6326 3.33374 28C3.33374 28.3675 3.63249 28.6663 3.99998 28.6663Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.33378 9.9325V11.4012C2.69752 11.5312 2.10879 11.8437 1.64252 12.3087C1.01752 12.935 0.66626 13.7825 0.66626 14.6662V17.3337C0.66626 18.2175 1.01752 19.065 1.64252 19.6912C2.10876 20.1562 2.69752 20.4687 3.33378 20.5987V22.0674C2.69752 22.1974 2.10879 22.5112 1.64252 22.9762C1.01752 23.6012 0.66626 24.4487 0.66626 25.3337V27.9999C0.66626 28.8837 1.01752 29.7324 1.64252 30.3574C2.26751 30.9824 3.11628 31.3337 4.00002 31.3337H28C28.8838 31.3337 29.7325 30.9824 30.3575 30.3574C30.9825 29.7324 31.3338 28.8837 31.3338 27.9999V25.3337C31.3338 24.4487 30.9825 23.6012 30.3575 22.9762C29.8913 22.5112 29.3025 22.1974 28.6663 22.0674V20.5987C29.3025 20.4687 29.8912 20.1562 30.3575 19.6912C30.9825 19.065 31.3338 18.2175 31.3338 17.3337V14.6662C31.3338 13.7825 30.9825 12.935 30.3575 12.3087C29.8913 11.8437 29.3025 11.5312 28.6663 11.4012V9.9325C29.3025 9.8025 29.8912 9.48876 30.3575 9.02376C30.9825 8.39877 31.3338 7.55125 31.3338 6.66626V4.00002C31.3338 3.11628 30.9825 2.26751 30.3575 1.64252C29.7325 1.01752 28.8838 0.66626 28 0.66626H4.00002C3.11628 0.66626 2.26751 1.01752 1.64252 1.64252C1.01752 2.26751 0.66626 3.11628 0.66626 4.00002V6.66626C0.66626 7.55125 1.01752 8.39877 1.64252 9.02376C2.10876 9.48876 2.69752 9.80252 3.33378 9.9325V9.9325ZM30 25.3338V28C30 28.5313 29.7888 29.0388 29.4138 29.4138C29.0388 29.7888 28.5313 30 28 30H4.00002C3.46876 30 2.96127 29.7888 2.58626 29.4138C2.21125 29.0388 2.00002 28.5313 2.00002 28V25.3338C2.00002 24.8025 2.21127 24.2938 2.58626 23.9188C2.96125 23.5438 3.46876 23.3338 4.00002 23.3338H28C28.5313 23.3338 29.0388 23.5438 29.4138 23.9188C29.7888 24.2938 30 24.8025 30 25.3338ZM4.66626 22H27.3338V20.6663H4.66626V22ZM28 12.6663C28.5313 12.6663 29.0388 12.8775 29.4138 13.2525C29.7888 13.6275 30 14.1362 30 14.6663V17.3337C30 17.8637 29.7888 18.3725 29.4138 18.7475C29.0388 19.1225 28.5313 19.3337 28 19.3337H4.00002C3.46876 19.3337 2.96127 19.1225 2.58626 18.7475C2.21125 18.3725 2.00002 17.8638 2.00002 17.3337V14.6663C2.00002 14.1363 2.21127 13.6275 2.58626 13.2525C2.96127 12.8775 3.46876 12.6663 4.00002 12.6663H28ZM4.66626 10V11.3338H27.3338V10H4.66626ZM28 8.66626H4.00002C3.46876 8.66626 2.96127 8.45626 2.58626 8.08127C2.21125 7.70628 2.00002 7.19752 2.00002 6.66626V4.00002C2.00002 3.46876 2.21127 2.96127 2.58626 2.58626C2.96125 2.21125 3.46876 2.00002 4.00002 2.00002H28C28.5313 2.00002 29.0388 2.21127 29.4138 2.58626C29.7888 2.96125 30 3.46876 30 4.00002V6.66626C30 7.19752 29.7888 7.70626 29.4138 8.08127C29.0388 8.45628 28.5313 8.66626 28 8.66626Z"
      fill="black"
    />
  </svg>
);