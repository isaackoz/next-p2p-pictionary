// const Button = ({ text }: { text: string }) => {
//   // credit to https://www.joshwcomeau.com/animation/3d-button/ for button inspiration
//   return (
//     <button
//       className={clsx(
//         `relative border-none bg-transparent p-0 cursor-pointer outline-offset-4 [transition:filter_0.25s]`,
//         `hover:brightness-110`,
//         `group focus:[&:not(:focus-visible)]:outline-none`
//       )}
//     >
//       <span
//         id="shadow"
//         className={clsx(
//           "absolute top-0 left-0 w-full h-full rounded-[12px] bg-[hsl(0deg_0%_0%/0.25)] will-change-transform translate-y-[2px] [transition:transform_600ms_cubic-bezier(0.3,0.7,0.4,1)]",
//           `group-hover:translate-y-[4px] group-hover:[transition:transform_250ms_cubic-bezier(0.3,0.7,0.4,1.5)]`,
//           `group-active:translate-y-[1px] group-active:[transition:transform_34ms]`
//         )}
//       />
//       <span
//         id="edge"
//         className={clsx(
//           "absolute top-0 left-0 w-full h-full rounded-[12px] [background:linear-gradient(to_left,hsl(340deg_100%_16%)_0%,hsl(340deg_100%_32%)_8%,hsl(340deg_100%_32%)_92%,hsl(340deg_100%_16%)_100%)]"
//         )}
//       />
//       <span
//         id="front"
//         className={clsx(
//           "block relative py-3 px-[42px] rounded-[12px] text-xl text-white bg-[hsl(345deg_100%_47%)] will-change-transform translate-y-[-4px] [transition:transform_600ms_cubic-bezier(0.3,0.7,0.4,1)]",
//           `group-hover:translate-y-[-6px] group-hover:[transition:transform_250ms_cubic-bezier(0.3,0.7,0.4,1.5)]`,
//           `group-active:translate-y-[-2px] group-active:[transition:transform_34ms]`
//         )}
//       >
//         {text}
//       </span>
//     </button>
//   );
// };
