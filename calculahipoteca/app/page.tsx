import InputField from '@/components/form/InputField'
import Image from 'next/image'
import { interestRateTypes } from '@/utils/constants'
import BankBar from '@/components/banks/BankBar'
import InputCheck from '@/components/form/InputCheck'

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
        {/* Bank Bar */}
        <div className="flex  items-center pt-8">
          <BankBar />
        </div>
        {/* Form */}
        <div className="flex flex-col gap-4 pt-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <InputField label="Coste de la vivienda" type="input" value="" />
            </div>

            <div className="flex flex-col w-1/2">
              <InputField label="Plazo del préstamo" type="range" value={"10"} max={30} />
            </div>


          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              {/* Tasa de interes: selector of 5 types */}
              <InputField label="Tasa de interés" type="select" value={interestRateTypesArray} />
            </div>
            <div className="flex flex-col w-1/2 justify-center">
              <div className="flex gap-1">
                <InputField label="Interes" type="select" value="" />
              </div>
            </div>
          </div>
          <InputField label="Pago Inicial" type="range" value={"20"} max={200000} />


          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg mt-10">Calcular</button>
        </div>
      </div>
    </div>
  )
}
