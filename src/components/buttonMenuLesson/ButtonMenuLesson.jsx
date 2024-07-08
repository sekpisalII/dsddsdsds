import React from 'react'
import { Button } from "flowbite-react";
const  ButtonMenuLesson = () => {
  return (
    <div>

    <h3 className="text-black text-3xl font-suwannaphum ml-[10%] mt-5">ប្រភេទមេរៀន</h3>
    <div className="flex flex-wrap gap-2 ml-[10%] mt-5 font-suwannaphum border-black">
      <Button color="gray" pill >
        វិទ្យាសាស្ត្រ
      </Button>
      <Button color="gray" pill>
        បច្ចេកវិទ្យា
      </Button>
      <Button color="gray" pill>
        វិស្វកម្ម
      </Button>
      <Button color="gray" pill>
        គណិតវិទ្យា
      </Button>
    </div>
</div>
  )
}
export default ButtonMenuLesson;