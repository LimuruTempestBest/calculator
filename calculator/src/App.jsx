import { Icon } from '@iconify/react';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const App = () => {
  const [time, setTime] = useState(Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center w-full h-screen bg-purple-300 overflow-hidden'>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />



      <div className='bg-slate-100 p-5 md:p-10 w-48 md:w-96 rounded calculator-shadow z-[900] animate__animated animate__zoomInDown'>

        <div className='flex flex-row items-center justify-between'>

          <div className='text-zinc-500'>
            {moment(time).format("HH:mm")}
          </div>

          <div className='flex gap-2 items-center translate-x-1/2 -translate-y-1/2 '>
            <div className="w-8 h-1 rounded-full bg-stone-900">
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-stone-900">
            </div>
          </div>

          <div className='flex flex-row gap-2 text-zinc-500'>
            <Icon icon="ant-design:signal-filled" />
            <Icon icon="fa-solid:wifi" />
            <Icon icon="ion:battery-half" />
          </div>
        </div>


        <input value={count}
          disabled className="font-['Source+Sans+Pro:wght@300'] tracking-widest p-4 mt-10 text-xl input w-full text-right input ml-2" />


        <div className="grid grid-cols-4 grid-grid-rows-5 text-2xl flex items-center mt-10 gap-6 ml-4 font-['Source+Sans+Pro:wght@300']">
          <div onClick={() => setCount("0")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            AC
          </div>
          <div onClick={() => setCount(count.slice(0, -1))} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            <Icon icon="lucide:delete" />
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + "%")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            %
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + "÷")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            <Icon icon="fa6-solid:divide" />
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 9)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            9
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 8)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            8
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 7)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            7
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + "×")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            X
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 6)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            6
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 5)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            5
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 4)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            4
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + "-")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            <Icon icon="akar-icons:minus" />
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 3)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            3
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 2)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            2
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 1)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            1
          </div>
          <div className='row-span-2 flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'
            onClick={() => {
              try {
                setCount(
                  eval(
                    count
                      .replaceAll("×", "*")
                      .replaceAll("%", "/100")
                      .replaceAll("÷", "/")
                  )
                );
              }
              catch (error) {
                if (error instanceof SyntaxError) {
                  toast.error('Bread error 🍞!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }
            }
            }> =
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + 0)} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            0
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + ".")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            .
          </div>
          <div onClick={() => setCount((count == "0" ? "" : count) + "+")} className='flex justify-center items-center button hover:cursor-pointer w-full h-full aspect-square'>
            +
          </div>
        </div>
      </div>
      <div className="c absolute bottom-0">
        <div className="card-home absolute bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#E879F9"
              fill-opacity="1"
              d="M0,192L0,32L36.9,32L36.9,128L73.8,128L73.8,256L110.8,256L110.8,128L147.7,128L147.7,32L184.6,32L184.6,288L221.5,288L221.5,192L258.5,192L258.5,224L295.4,224L295.4,160L332.3,160L332.3,192L369.2,192L369.2,0L406.2,0L406.2,32L443.1,32L443.1,96L480,96L480,256L516.9,256L516.9,160L553.8,160L553.8,32L590.8,32L590.8,320L627.7,320L627.7,256L664.6,256L664.6,64L701.5,64L701.5,288L738.5,288L738.5,192L775.4,192L775.4,288L812.3,288L812.3,224L849.2,224L849.2,128L886.2,128L886.2,192L923.1,192L923.1,160L960,160L960,96L996.9,96L996.9,32L1033.8,32L1033.8,224L1070.8,224L1070.8,224L1107.7,224L1107.7,128L1144.6,128L1144.6,192L1181.5,192L1181.5,0L1218.5,0L1218.5,32L1255.4,32L1255.4,96L1292.3,96L1292.3,320L1329.2,320L1329.2,128L1366.2,128L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#E879F9"
              fill-opacity="1"
              d="M0,192L0,32L36.9,32L36.9,128L73.8,128L73.8,256L110.8,256L110.8,128L147.7,128L147.7,32L184.6,32L184.6,288L221.5,288L221.5,192L258.5,192L258.5,224L295.4,224L295.4,160L332.3,160L332.3,192L369.2,192L369.2,0L406.2,0L406.2,32L443.1,32L443.1,96L480,96L480,256L516.9,256L516.9,160L553.8,160L553.8,32L590.8,32L590.8,320L627.7,320L627.7,256L664.6,256L664.6,64L701.5,64L701.5,288L738.5,288L738.5,192L775.4,192L775.4,288L812.3,288L812.3,224L849.2,224L849.2,128L886.2,128L886.2,192L923.1,192L923.1,160L960,160L960,96L996.9,96L996.9,32L1033.8,32L1033.8,224L1070.8,224L1070.8,224L1107.7,224L1107.7,128L1144.6,128L1144.6,192L1181.5,192L1181.5,0L1218.5,0L1218.5,32L1255.4,32L1255.4,96L1292.3,96L1292.3,320L1329.2,320L1329.2,128L1366.2,128L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default App