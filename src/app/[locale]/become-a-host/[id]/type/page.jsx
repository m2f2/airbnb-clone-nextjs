'use client'
import NextBackFooter from "@/app/_components/AddListingLayout/NextBackFooter"
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import toast from "react-hot-toast";
import { updateListing } from "@/app/_actions/Listing/updateListing";
import { useTranslations } from "next-intl";

function Page({ params: { id } }) {
  const t = useTranslations("become-a-host")
  const router = useRouter()
  const types = [
    {
      title: t("apartment"),
      desc: t("apartment-desc"),
      value: "apartment"
    },
    {
      title: t("room"),
      desc: t("room-desc"),
      value: "room",
    },
    {
      title: t("sharedroom"),
      desc: t("sharedroom-desc"),
      value: "hostel"
    },
    
  ]
  const [selectedType, setSelectedType] = useState(null);
  const updateType = async () => {
    if (selectedType) {
      const listing = await updateListing(id, { type: selectedType })
      if (listing._id)
        router.push(`/become-a-host/${id}/location`)
      else
        toast(t("fail"))
    } else {
      toast(t("type-toast"))
    }
  }
  return (
    <>
      <h1 className="max-w-2xl mx-auto my-2 text-3xl font-semibold font-airbnb text-center">{t("type")}</h1>
      <div className="grid grid-cols-1 gap-4 p-4 max-w-2xl mx-auto h-[calc(100vh-230px)]">
        {types.map(({ title, desc, value }) => (
          <div
            key={value}
            onClick={() => setSelectedType(value)}
            className={`flex flex-col  justify-center px-4 border rounded-xl cursor-pointer transition-all overflow-hidden ${selectedType === value
              ? "border-primary text-primary bg-[#f7f7f7]"
              : "border-gray-200 hover:border-gray-300"
              }`}
            role="button"
            tabIndex={0}
          >
            <div className="h-fit">
              
            <p className="text-lg font-semibold font-airbnb ms-2 text-[#333]">{title}</p>
            <span className="text-base font-medium font-airbnb ms-2 text-[#555]">{desc}</span>
            </div>
          </div>
        ))}
      </div>
      <NextBackFooter progress={22} next={updateType} />
    </>
  )
}
export default Page