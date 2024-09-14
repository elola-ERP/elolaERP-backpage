// import { GetServerSideProps } from "next";
// import { getSession } from 'next-auth/react';

export default function DashboardHome() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-purple-1 pt-80">
            <svg 
                width="80" 
                height="80" 
                viewBox="0 0 48 48" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
                className="mb-10"
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M35.1111 12.4779C36.2285 12.1641 37.2831 11.5112 38.275 10.5193C39.0702 9.72417 39.6498 8.90181 40.0139 8.05224C40.378 7.19431 40.5328 6.35311 40.4784 5.52865C40.424 4.69583 40.1625 3.9195 39.6937 3.19967L37.0572 5.50982C37.2078 5.84463 37.279 6.18362 37.2706 6.52679C37.2622 6.86997 37.1764 7.20686 37.0132 7.53748C36.85 7.8681 36.6198 8.18198 36.3227 8.47912C35.8749 8.92692 35.3936 9.21987 34.8788 9.35798C34.3641 9.49609 33.843 9.48144 33.3157 9.31404C32.7926 9.14245 32.2925 8.81811 31.8154 8.34101L31.8091 8.33473L38.3754 1.76838L37.641 1.03391C37.2452 0.638118 36.847 0.293482 36.4463 0L38 8.26014e-09C43.5229 8.26014e-09 48 4.47715 48 10V13.1388L47.768 12.9068C46.9478 12.0866 46.117 11.486 45.2758 11.1052C44.4305 10.7202 43.5976 10.5318 42.7774 10.5402C41.9613 10.5444 41.1766 10.7223 40.4233 11.0738C39.67 11.417 38.9752 11.9066 38.3391 12.5427C37.3933 13.4886 36.7781 14.5223 36.4935 15.6439C36.2784 16.501 36.2529 17.3631 36.4171 18.2302L34.6599 16.473L32.8457 18.2872L31.4881 16.9296L31.5501 16.8675L18.6937 4.01105L16.0194 6.6853L27.9234 18.5893L27.8613 18.6513L30.1715 20.9615L28.8532 22.2798L29.9541 23.3807C29.6314 23.3624 29.3072 23.3838 28.9814 23.4448C28.3369 23.562 27.7049 23.8047 27.0855 24.173C26.4703 24.5371 25.8949 24.987 25.3592 25.5227C24.5892 26.2927 24.0284 27.0879 23.6768 27.9081C23.3253 28.72 23.1809 29.5257 23.2437 30.325C23.2924 30.9866 23.4802 31.6193 23.8071 32.2229C22.9949 31.6161 22.1571 31.3111 21.294 31.3079C20.1598 31.2954 19.1428 31.739 18.2431 32.6388C17.5358 33.3461 17.0901 34.1266 16.9059 34.9803C16.7218 35.8257 16.8076 36.623 17.1633 37.3721L17.0629 37.4725C16.3472 37.0666 15.5939 36.9327 14.8029 37.0708C14.0078 37.2047 13.2796 37.6023 12.6183 38.2635C11.9655 38.9164 11.5679 39.6404 11.4256 40.4356C11.2833 41.2307 11.3942 42.0112 11.7583 42.7771L11.6453 42.8901L9.9441 41.1889L7.3954 43.7376L11.6578 48H10C4.47715 48 2.1952e-08 43.5228 2.1952e-08 38L1.30189e-07 33.51C0.346274 33.588 0.704295 33.6166 1.07406 33.5957C2.26262 33.5288 3.53069 33.0851 4.87828 32.2649L6.62972 31.2165C7.21144 30.8608 7.73248 30.5909 8.19284 30.4067C8.65738 30.2184 9.0717 30.1389 9.4358 30.1682C9.80409 30.1933 10.1326 30.3502 10.4214 30.639C10.7311 30.9487 10.911 31.317 10.9613 31.7438C11.0115 32.1707 10.932 32.6227 10.7227 33.0998C10.5176 33.5727 10.1849 34.0393 9.72457 34.4997C9.25584 34.9684 8.7641 35.3179 8.24934 35.548C7.73458 35.7699 7.224 35.8494 6.71761 35.7866C6.21122 35.7155 5.72784 35.479 5.26749 35.0772L2.63718 37.7075C3.583 38.6115 4.58323 39.1639 5.63786 39.3648C6.6925 39.5573 7.76178 39.4297 8.84571 38.9819C9.93382 38.5299 10.9968 37.785 12.0347 36.7471C13.081 35.7008 13.8176 34.6504 14.2444 33.5957C14.6713 32.5327 14.7948 31.5178 14.6148 30.5511C14.4348 29.576 13.9536 28.6929 13.171 27.902C12.6311 27.3705 12.0577 26.9938 11.4509 26.772C10.8483 26.546 10.2226 26.4518 9.57391 26.4895C8.92522 26.5272 8.26189 26.6757 7.58391 26.9352C6.90593 27.1947 6.22377 27.542 5.53742 27.9773L4.10613 28.8561C3.76296 29.0738 3.42397 29.2621 3.08917 29.4211C2.75018 29.576 2.42583 29.6869 2.11614 29.7538C1.80226 29.8166 1.50512 29.8166 1.22472 29.7538C0.948511 29.6869 0.6995 29.5341 0.477692 29.2956C0.233225 29.0511 0.0739948 28.7673 5.91883e-08 28.4442L0 27.6362C0.0351772 27.4632 0.0918741 27.286 0.17009 27.1047C0.350047 26.6736 0.661834 26.2363 1.10545 25.7927C1.75832 25.1398 2.41537 24.7632 3.07661 24.6627C3.73785 24.5623 4.34677 24.7401 4.90339 25.1963L7.50858 22.5911C6.73016 21.8378 5.8513 21.3691 4.872 21.1849C3.8927 21.0008 2.88201 21.1033 1.83993 21.4925C1.21126 21.7258 0.597954 22.0634 1.83313e-08 22.5054L2.1952e-08 10C2.1952e-08 4.47715 4.47715 8.26014e-09 10 8.26014e-09L28.9731 7.38818e-08C28.7107 0.201543 28.457 0.424812 28.212 0.669809C27.2662 1.61563 26.651 2.64934 26.3664 3.77093C26.086 4.88834 26.1279 6.01412 26.492 7.14827C26.8561 8.28242 27.5341 9.34543 28.5259 10.3373C29.5429 11.3543 30.6164 12.0427 31.7463 12.4026C32.8721 12.7583 33.9937 12.7834 35.1111 12.4779ZM17.0063 48H38C43.5228 48 48 43.5229 48 38V22.7727C47.1265 23.553 46.2059 24.0791 45.2382 24.3509C44.1895 24.6376 43.1371 24.6331 42.0811 24.3374L44.3588 25.8203C44.2667 25.9961 44.1265 26.2326 43.9382 26.5297C43.7541 26.831 43.4946 27.1616 43.1598 27.5216C42.5404 28.1912 41.8896 28.6704 41.2075 28.9591C40.5295 29.2437 39.8494 29.3128 39.1672 29.1663C38.4851 29.0198 37.8301 28.6285 37.2024 27.9924L32.1803 22.9703L31.4075 23.7431C31.8596 23.9565 32.296 24.2734 32.7165 24.694L39.2201 31.1976L36.684 33.7337L35.3468 32.3966L35.2715 32.4719C35.418 32.9281 35.4766 33.401 35.4473 33.8907C35.4138 34.3761 35.2799 34.8658 35.0455 35.3596C34.807 35.8493 34.4491 36.3326 33.972 36.8097C33.3568 37.4249 32.7019 37.8665 32.0072 38.1343C31.3462 38.3837 30.6834 38.4515 30.0187 38.3377L31.0493 39.3684L28.3814 42.0363L22.4239 36.0789C21.8882 35.5432 21.3442 35.2837 20.7918 35.3005C20.2393 35.3172 19.7497 35.539 19.3228 35.9659C18.8373 36.4514 18.6134 36.985 18.6511 37.5667C18.6846 38.1442 18.9524 38.6841 19.4546 39.1863L25.343 45.0747L22.7504 47.6673L16.7364 41.6534C16.2635 41.1805 15.7509 40.9398 15.1984 40.9315C14.6502 40.9189 14.1564 41.1324 13.7169 41.5718C13.4198 41.8689 13.2273 42.2121 13.1394 42.6013C13.0515 42.9822 13.0724 43.3756 13.2022 43.7815C13.3277 44.1833 13.5684 44.562 13.9241 44.9177L17.0063 48ZM48 16.668V14.1438L41.9362 20.2077L41.9424 20.214C42.4195 20.691 42.9196 21.0154 43.4428 21.187C43.9701 21.3544 44.4911 21.369 45.0059 21.2309C45.5207 21.0928 46.0019 20.7999 46.4497 20.3521C46.7469 20.0549 46.9771 19.741 47.1403 19.4104C47.3035 19.0798 47.3893 18.7429 47.3977 18.3997C47.406 18.0566 47.3349 17.7176 47.1842 17.3828L48 16.668ZM30.1543 6.67493L34.2009 2.62841C33.8158 2.24339 33.391 1.98601 32.9265 1.85627C32.462 1.72653 31.9974 1.72653 31.5329 1.85627C31.0683 1.97764 30.6415 2.23293 30.2523 2.62214C29.8463 3.02809 29.5806 3.48216 29.455 3.98437C29.3295 4.47821 29.3357 4.96995 29.4738 5.4596C29.5974 5.90745 29.8242 6.31256 30.1543 6.67493ZM41.9213 24.2905L41.8734 24.2755C40.7434 23.9156 39.67 23.2272 38.653 22.2102C37.6611 21.2184 36.9831 20.1554 36.619 19.0212C36.5784 18.8945 36.5417 18.768 36.5091 18.6415L34.8545 20.2961L39.5251 24.9666C39.772 25.2135 40.0022 25.3684 40.2156 25.4311C40.4249 25.4897 40.6236 25.4793 40.812 25.3997C41.0045 25.316 41.1907 25.1842 41.3707 25.0042C41.4962 24.8787 41.6113 24.7427 41.7159 24.5962C41.8008 24.4689 41.8693 24.367 41.9213 24.2905ZM40.2814 18.5479L44.3279 14.5014C43.9429 14.1163 43.5181 13.8589 43.0536 13.7292C42.589 13.5995 42.1245 13.5995 41.6599 13.7292C41.1954 13.8506 40.7685 14.1059 40.3793 14.4951C39.9734 14.901 39.7076 15.3551 39.5821 15.8573C39.4565 16.3511 39.4628 16.8429 39.6009 17.3325C39.7244 17.7804 39.9513 18.1855 40.2814 18.5479ZM26.7398 35.0588C26.6698 34.6422 26.6783 34.2257 26.7654 33.8091C26.8826 33.2483 27.1002 32.6958 27.4182 32.1518C27.7405 31.6035 28.1172 31.0679 28.5482 30.5447C29.0504 29.9253 29.448 29.4189 29.741 29.0255C30.0297 28.628 30.1992 28.2994 30.2494 28.04C30.2997 27.7805 30.2222 27.5482 30.0172 27.3432L29.9795 27.3055C29.5819 26.9079 29.1488 26.7259 28.68 26.7593C28.2155 26.7886 27.7551 27.0314 27.299 27.4875C26.8177 27.9688 26.5415 28.4585 26.4703 28.9565C26.395 29.4503 26.4703 29.9023 26.6963 30.3124L24.1371 32.4872C24.2804 32.6098 24.4229 32.7419 24.5646 32.8836L26.7398 35.0588ZM33.7021 32.9239C33.5556 33.3801 33.2857 33.8049 32.8923 34.1983C32.4822 34.6084 32.049 34.8532 31.5928 34.9327C31.1367 35.0039 30.7265 34.8574 30.3624 34.4933C30.1113 34.2422 29.9669 33.9681 29.9293 33.671C29.8874 33.3696 29.9335 33.0516 30.0674 32.7168C30.2013 32.382 30.4022 32.0346 30.67 31.6747C30.7956 31.5073 30.9358 31.321 31.0906 31.116C31.2413 30.9067 31.3899 30.6954 31.5363 30.4819C31.6786 30.2643 31.8 30.0634 31.9004 29.8793C32.0009 29.6868 32.0658 29.5215 32.095 29.3834L33.1183 30.4066C33.4573 30.7456 33.6749 31.1348 33.7712 31.5742C33.8674 32.0137 33.8444 32.4636 33.7021 32.9239ZM19.5882 28.5533C20.2829 28.2854 20.9379 27.8439 21.5531 27.2287C22.0302 26.7516 22.388 26.2682 22.6266 25.7786C22.8609 25.2847 22.9949 24.7951 23.0283 24.3096C23.0576 23.82 22.999 23.347 22.8526 22.8909L22.9279 22.8155L24.265 24.1527L26.8012 21.6165L20.2976 15.113C19.7242 14.5396 19.1216 14.1588 18.4896 13.9704C17.8535 13.7779 17.2111 13.7423 16.5624 13.8637C15.9179 13.9809 15.286 14.2236 14.6666 14.5919C14.0514 14.956 13.4759 15.4059 12.9403 15.9416C12.1702 16.7116 11.6094 17.5068 11.2579 18.3271C10.9063 19.139 10.7619 19.9446 10.8247 20.7439C10.8833 21.5391 11.1428 22.2924 11.6031 23.0039L14.2774 20.7314C14.0514 20.3213 13.9761 19.8693 14.0514 19.3754C14.1225 18.8774 14.3988 18.3878 14.88 17.9065C15.3362 17.4503 15.7966 17.2076 16.2611 17.1783C16.7298 17.1448 17.163 17.3268 17.5606 17.7244L17.5982 17.7621C17.8033 17.9672 17.8807 18.1994 17.8305 18.4589C17.7803 18.7184 17.6108 19.0469 17.322 19.4445C17.0291 19.8379 16.6315 20.3443 16.1293 20.9637C15.6982 21.4868 15.3216 22.0225 14.9993 22.5707C14.6812 23.1148 14.4636 23.6672 14.3464 24.228C14.2293 24.7888 14.2544 25.3496 14.4218 25.9104C14.5892 26.4712 14.9407 27.0194 15.4764 27.5551C16.1125 28.1912 16.7821 28.5846 17.4852 28.7353C18.1883 28.8776 18.8893 28.8169 19.5882 28.5533ZM21.2832 23.3429C21.1367 23.799 20.8668 24.2238 20.4734 24.6172C20.0632 25.0273 19.6301 25.2722 19.1739 25.3517C18.7177 25.4228 18.3076 25.2764 17.9435 24.9123C17.6924 24.6612 17.548 24.387 17.5103 24.0899C17.4685 23.7886 17.5145 23.4705 17.6484 23.1357C17.7824 22.8009 17.9833 22.4535 18.2511 22.0936C18.3766 21.9262 18.5168 21.74 18.6717 21.5349C18.8224 21.3257 18.9709 21.1143 19.1174 20.9009C19.2597 20.6833 19.3811 20.4824 19.4815 20.2982C19.5819 20.1057 19.6468 19.9404 19.6761 19.8023L20.6994 20.8256C21.0383 21.1645 21.256 21.5538 21.3522 21.9932C21.4485 22.4326 21.4255 22.8825 21.2832 23.3429Z"/>
            </svg>
            <h1 className="text-3xl font-bold">Hello!</h1>
            <h1 className="text-3xl font-bold">Welcome to Salemate</h1>
        </div>
    );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const session = await getSession(context);


// }