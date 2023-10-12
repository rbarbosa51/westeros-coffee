"use client"
import { useState, useRef, useEffect } from "react"

interface iFlowField {
    className?: string
}
interface iPoints {
    x: number
    y: number
    vx: number
    vy: number
}

export default function FlowField({className}: iFlowField) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
    const [points, setPoints] = useState<iPoints[] | null>(null)
    
    function getValue(x:number, y:number, canvas:HTMLCanvasElement) {
        const a = Math.random() * 8 - 4;
        const b = Math.random() * 8 - 4;
        const c = Math.random() * 8 - 4;
        const d = Math.random() * 8 - 4;
        const scale = 0.015;
        x = (x - canvas.width / 2) * scale;
        y = (y - canvas.height / 2)  * scale;
        const x1 = Math.sin(a * y) + c * Math.cos(a * x);
        const y1 = Math.sin(b * x) + d * Math.cos(b * y);
        return Math.atan2(y1 - y, x1 - x);
    }
    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current!
            const ctx = canvas?.getContext('2d')
            setContext(ctx!)
            const temp:iPoints[] =[];
            for (let y = 0; y < ctx?.canvas?.height! / 20; y++) {
                temp?.push({x:0, y: y, vx: 0, vy: 0})
            }
            setPoints([...temp]);
        }
    }, [])
    useEffect(() => {
        let animationFrameId: number;
        if (context) {
            const render =() => {
                //context?.clearRect(0,0,context.canvas.width, context.canvas.height)
                context.lineWidth = 0.03;
                context.strokeStyle = 'rgba(0,0,0, 0.8)'
                
                points?.forEach(point => {
                    const value = getValue(point.x, point.y, context.canvas)
                    point.vx += Math.cos(value) * 0.3;
                    point.vy += Math.sin(value) * 0.3;
                    
                    context.beginPath()
                    context.moveTo(point.x, point.y)

                    point.x += point.vx;
                    point.y += point.vy;

                    context.lineTo(point.x, point.y)
                    context.stroke()

                    //point.vx *= 0.99999;
                    //point.vy *= 0.99999;
                    point.vx *= 0.99;
                    point.vy *= 0.99;

                    if (point.x > context.canvas.width) point.x = 0;
                    if (point.y > context.canvas.height) point.y = 0;
                    if (point.x < 0) point.x = context.canvas.width;
                    if (point.y < 0) point.y = context.canvas.height;
                })
                
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()
            return () => window.cancelAnimationFrame(animationFrameId)
        }
    }, [context])

    return (
        <canvas ref={canvasRef} className={className}></canvas>
    )
}