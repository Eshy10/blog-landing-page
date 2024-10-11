import Button from "@/components/ui/Button";

export default function GetStarted() {
  return (
    <section className="h-[391px] rounded-[12px] bg-[#0a2640] flex flex-col justify-center items-center bg-no-repeat bg-right-top bg-[url('/assets/images/blue-ellipse.svg')] mx-auto my-40">
      <h2 className="text-white text-center font-manrope text-2xl md:text-4xl font-normal leading-[72px] w-[700px] max-w-full">
        An enterprise template to ramp up your company website
      </h2>
      <form>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-[370px] h-14 rounded-full border-2 border-white bg-white px-5 max-w-full"
            />
          </label>
          <Button
            type="button"
            className="md:ml-8 w-[95%] mt-4 md:mt-0 md:w-[210px] h-[60px] py-4 px-14"
            variant="secondary"
          >
            Start now
          </Button>
        </div>
      </form>
    </section>
  );
}
