import React from 'react'

const Loading = ({className,LoadItem}) => {
 
    
  return (
    <>
      <div className={className}>
        {[...new Array(10).map((_, index) => index)].map((item) => (
          <div className="bg-gray-300 w-[250px] h-[370px]" key={item + ""}>
            <div className="flex gap-x-2 items-center justify-center h-full animate-pulse">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div className="flex flex-col gap-y-3">
                <div className="w-48 h-3 bg-slate-700 rounded-full"></div>
                <div className="flex items-center gap-x-4">
                  <div className="w-32 h-3 bg-slate-700 rounded-full"></div>
                  <div className="w-12 h-3 bg-slate-700 rounded-full"></div>
                </div>
                <div className="w-48 h-3 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Loading
