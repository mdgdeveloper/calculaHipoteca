import InputField from '@/components/form/InputField'
import Image from 'next/image'
import { interestRateTypes } from '@/utils/constants'

export default function Home() {


  const interestRateTypesArray: string[] = interestRateTypes.map((value) => {
    return (value.name)
  })

  return (
    // First container to center the whole content in the screen
    <div className="flex justify-center items-center h-screen">
      {/* Container for the tool */}
      <div className="flex flex-col w-1/2 h-1/2 bg-gray-50 rounded-lg shadow-md p-10">
        {/* Header */}
        <div className="flex gap-8">
          <div className="basis-4/5">
            <h1 className="text-2xl font-bold text-gray-800">Calcula de hipoteca</h1>
            <div className="text-gray-600 pt-2 text-justify ">Esta aplicación calcula pagos mensuales de hipoteca basados en el coste, tasa de interés y plazo del préstamo, ofreciendo también información adicional como el total a pagar y la distribución de capital e intereses.</div>
          </div>
          <div className="basis-1/5">
            <div className="flex justify-end items-center">
              <Image src="/img/logo_base.png" width={100} height={100} alt="logo" /></div>
          </div>
        </div>
        {/* Form */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <InputField label="Coste de la vivienda" type="input" value="" onChange={() => { }} />
            </div>
            <div className="flex flex-col w-1/2">
              {/* Tasa de interes: selector of 5 types */}
              <InputField label="Tasa de interés" type="select" value={interestRateTypesArray} onChange={() => { }} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-gray-800">Plazo del préstamo</label>
              {/* Plazo del prestamo: range slider starting from 0 and reaching 50 years in steps of 5 years  */}
              <input className="border border-gray-300 rounded-lg px-4 py-2" type="range" min="0" max="50" step="1" />

            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-gray-800">Pago inicial</label>
              {/* Pago inicial: Range slider with minimum of 0 and maximum of coste de la vivienda */}
              <input className="border border-gray-300 rounded-lg px-4 py-2" type="range" min="0" max="100" step="1" />
            </div>
          </div>
        </div>


        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg">Calcular</button> */}
      </div>

    </div>
  )
}
