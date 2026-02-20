// TradingViewWidget.jsx
"use client";


import { memo,} from 'react';
import useTradingWidget from '@/hooks/useTradingWidget';
import { cn } from '@/lib/utils';

interface PropsTradingViewWidget {
    title?:string;
    scriptUrl:string;
    config:Record<string, unknown>;
    height?:number;
    className?:string;
}

function TradingViewWidget({scriptUrl, config, title, height = 600, className}: PropsTradingViewWidget) {
  const containerRef = useTradingWidget(scriptUrl, config, height);

  return (
    <div className='w-full'>
      {title && <h3 className='font-semibold text-2xl text-gray-100 mb-5 '>{title}</h3>}
    <div className={cn("tradingview-widget-container", className)}>
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}  ref={containerRef} ></div>
      
    </div>

    </div>
  );
}

export default memo(TradingViewWidget);
