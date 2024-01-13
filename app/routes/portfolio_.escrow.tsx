import { Link } from '@remix-run/react';

export default function Escrow() {
  return (
    <>
      <div className="my-20 flex items-start flex-wrap flex-col ">
        <Link to="https://escrow.jenibober.com/" className="font-bold text-blue-800">
          Link to product
        </Link>
        <h1 className="font-bold text-3xl my-3">About Escrow Calendars</h1>

        <div>
          <img src="/images/escrow.png" className="md:w-[50%] w-[80%] mx-auto py-6" alt="" />
        </div>

        <h2 className="font-bold text-2xl my-3">What is it?</h2>
        <p>
          "Escrow Calendars" is a web-based tool designed for real estate professionals, and their
          clients. It is a customizable calendar tool created to streamline and simplify the
          management of real estate transactions.
        </p>

        <h2 className="font-bold text-2xl my-3">What problem does it solve?</h2>
        <p>
          As a realtor, the abundance of paperwork and numerous key contractual dates pose
          challenges. Clients frequently inquire about these dates, causing repetitive questions and
          confusion. "Escrow Calendars" addresses this issue by providing a solution that not only
          saves time but also enhances communication and client satisfaction.
        </p>

        <h2 className="font-bold text-2xl my-3">How does it solve it?</h2>
        <p>
          The tool operates as a questionnaire with standard fields for inputting key dates in the
          real estate process. Custom fields are also available for additional details. Upon form
          completion, clicking "generate calendar" transforms it into a customized, visually
          intuitive calendar with icons on significant dates. This user-friendly interface allows
          easy navigation with three essential buttons: download, email, and edit.
        </p>
        <p>
          The flexibility of the tool is a standout feature, enabling quick edits or updates in case
          of delays or changes in the escrow process.
        </p>

        <h2 className="font-bold text-2xl my-3">What is a customer journey like?</h2>
        {/* embed pdf */}
        <embed src="/assets/customer journey.pdf" width="100%" height="1000px" />
      </div>
    </>
  );
}
