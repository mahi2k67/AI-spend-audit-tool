"use client";
import { useState } from "react";
const aiPlans = [

  {
    category: "ChatGPT",

    plans: [

      {
        name: "Free",
        price: "₹0",
        color: "text-green-400",
        features: [
          "Basic AI access",
          "Limited daily usage",
        ],
      },

      {
        name: "Go",
        price: "₹399/month",
        color: "text-cyan-400",
        features: [
          "10x more usage",
          "Image generation",
          "File uploads",
        ],
      },

      {
        name: "Plus",
        price: "₹1999/month",
        color: "text-blue-400",
        features: [
          "GPT-5 access",
          "Faster responses",
          "Custom GPTs",
        ],
      },

      {
        name: "Business",
        price: "₹2500/user",
        color: "text-yellow-400",
        features: [
          "Admin controls",
          "Team management",
          "Higher limits",
        ],
      },

      {
        name: "Pro",
        price: "₹19,900/month",
        color: "text-red-400",
        features: [
          "Deep research",
          "Maximum usage",
          "Advanced AI agents",
        ],
      },
    ],
  },

  {
    category: "Claude",

    plans: [

      {
        name: "Free",
        price: "₹0",
        color: "text-green-400",
        features: [
          "Basic access",
          "Limited messages",
        ],
      },

      {
        name: "Pro",
        price: "₹1700/month",
        color: "text-cyan-400",
        features: [
          "5x higher usage",
          "Claude Code access",
          "Priority access",
        ],
      },

      {
        name: "Max",
        price: "₹8500 - ₹17,000/month",
        color: "text-red-400",
        features: [
          "Heavy usage plan",
          "Power user features",
        ],
      },

      {
        name: "Team",
        price: "₹2200/user",
        color: "text-yellow-400",
        features: [
          "Admin controls",
          "Team billing",
          "Higher limits",
        ],
      },
    ],
  },

  {
    category: "GitHub Copilot",

    plans: [

      {
        name: "Free",
        price: "₹0",
        color: "text-green-400",
        features: [
          "2000 code completions",
          "50 AI chat requests",
        ],
      },

      {
        name: "Pro",
        price: "₹850/month",
        color: "text-cyan-400",
        features: [
          "Unlimited completions",
          "Premium AI models",
        ],
      },

      {
        name: "Business",
        price: "₹1600/user",
        color: "text-yellow-400",
        features: [
          "Organization controls",
          "Business AI coding",
        ],
      },

      {
        name: "Enterprise",
        price: "₹3300/user",
        color: "text-red-400",
        features: [
          "Knowledge base AI",
          "Enterprise integrations",
        ],
      },
    ],
  },

  {
    category: "Gemini",

    plans: [

      {
        name: "Free",
        price: "₹0",
        color: "text-green-400",
        features: [
          "Gemini Flash access",
          "Basic AI features",
        ],
      },

      {
        name: "AI Plus",
        price: "₹399/month",
        color: "text-cyan-400",
        features: [
          "Workspace AI",
          "200GB storage",
          "Higher prompt limits",
        ],
      },

      {
        name: "AI Ultra",
        price: "₹24,500/month",
        color: "text-red-400",
        features: [
          "Deep research",
          "AI agents",
          "Video generation",
        ],
      },
    ],
  },
];

export default function Home() {
const [userType, setUserType] =
    useState("Student");

  const [tool, setTool] =
    useState("ChatGPT");

  const [cost, setCost] =
    useState("");

  const [teamSize, setTeamSize] =
    useState("");

  const [monthlyStatus,
    setMonthlyStatus] =
    useState<number | null>(null);

  const [yearlyStatus,
    setYearlyStatus] =
    useState<number | null>(null);

  const [recommendedCost,
    setRecommendedCost] =
    useState<number | null>(null);

  const [perPersonCost,
    setPerPersonCost] =
    useState<number | null>(null);

  const [message,
    setMessage] =
    useState("");

  const [grade,
    setGrade] =
    useState("");


  const PRICING: any = {

    ChatGPT: {
      Student: 0,
      Professional: 1999,
      Business: 2500,
    },

    Claude: {
      Student: 0,
      Professional: 1700,
      Business: 2200,
    },

    "GitHub Copilot": {
      Student: 0,
      Professional: 850,
      Business: 1600,
    },

    Gemini: {
      Student: 0,
      Professional: 399,
      Business: 1200,
    },
  };
  const handleSubmit = (e: any) => {

    e.preventDefault();

    const monthlyCost =
      Number(cost);

    const team =
      Number(teamSize);

    const basePrice =
      PRICING[tool]?.[userType] || 0;

    let finalRecommendedCost = 0;

    let recommendation = "";
    if (userType === "Student") {

      finalRecommendedCost = 0;

      if (monthlyCost <= 500) {

        recommendation =
          "Excellent! Free AI plans are enough for most students.";
      }

      else {

        recommendation =
          "Students can reduce costs using free plans and educational offers.";
      }
    }
    else if (userType === "Professional") {

      finalRecommendedCost =
        basePrice;

      if (monthlyCost <= finalRecommendedCost) {

        recommendation =
          "Your professional AI spending looks optimized.";
      }

      else {

        recommendation =
          "You may be paying for unnecessary subscriptions.";
      }
    }
    else {

      finalRecommendedCost =
        basePrice * team;

      if (monthlyCost <= finalRecommendedCost) {

        recommendation =
          "Your business AI spending is well managed.";
      }

      else {

        recommendation =
          "Your business may have unused AI subscriptions.";
      }
    }
    const result =
      monthlyCost -
      finalRecommendedCost;

    const yearly =
      result * 12;

    const eachPerson =
      team > 0
        ? monthlyCost / team
        : monthlyCost;

    let spendGrade = "";

    if (userType === "Student") {

      if (eachPerson <= 500) {

        spendGrade =
          "Excellent Student Spending";
      }

      else if (eachPerson <= 1500) {

        spendGrade =
          "Average Student Spending";
      }

      else {

        spendGrade =
          "Expensive Student Spending";
      }
    }

    else if (userType === "Professional") {

      if (eachPerson <= 2500) {

        spendGrade =
          "Excellent Professional Spending";
      }

      else if (eachPerson <= 5000) {

        spendGrade =
          "Average Professional Spending";
      }

      else {

        spendGrade =
          "Expensive Professional Spending";
      }
    }

    else {

      if (eachPerson <= 3000) {

        spendGrade =
          "Excellent Business Spending";
      }

      else if (eachPerson <= 7000) {

        spendGrade =
          "Average Business Spending";
      }

      else {

        spendGrade =
          "Expensive Business Spending";
      }
    }
    setMonthlyStatus(result);

    setYearlyStatus(yearly);

    setRecommendedCost(
      finalRecommendedCost
    );

    setPerPersonCost(
      eachPerson
    );

    setMessage(
      recommendation
    );

    setGrade(
      spendGrade
    );
  };

  const statusColor =
    grade.includes("Excellent")

      ? "text-green-400"

      : grade.includes("Average")

      ? "text-yellow-400"

      : "text-red-400";

  const statusBg =
    grade.includes("Excellent")

      ? "bg-green-500/10 border-green-500/20"

      : grade.includes("Average")

      ? "bg-yellow-500/10 border-yellow-500/20"

      : "bg-red-500/10 border-red-500/20";
  return (

    <main className="min-h-screen bg-gradient-to-br from-[#071120] via-[#0B1730] to-[#13254A] text-white p-6">
      <h1 className="text-5xl font-extrabold leading-tight center mb-12">

            AI Spent
            <span className="text-cyan-400">
              {" "}Audit Tool
            </span>

          </h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
            AI Subscription Plans
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">

            Explore
            <span className="text-cyan-400">
              {" "}AI Pricing
            </span>

          </h1>

          <p className="text-blue-100/70 mt-6 text-lg leading-8">

            Compare popular AI subscription plans
            and choose the right one for your needs.

          </p>

          <div className="space-y-8 mt-10">

            {aiPlans.map((tool, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >

                <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                  {tool.category}
                </h2>

                <div className="space-y-4">

                  {tool.plans.map((plan, idx) => (

                    <div
                      key={idx}
                      className="bg-[#12213D] border border-white/10 rounded-2xl p-4"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="text-xl font-bold">
                            {plan.name}
                          </h3>

                          <ul className="mt-2 space-y-1">

                            {plan.features.map((feature, i) => (

                              <li
                                key={i}
                                className="text-sm text-blue-100/70"
                              >
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <h2 className={`text-2xl font-bold whitespace-nowrap ${plan.color}`}>
                          {plan.price}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-[32px] backdrop-blur-2xl p-8 shadow-2xl h-fit sticky top-6">

          <h2 className="text-3xl font-bold mb-2">
            AI Spend Audit
          </h2>

          <p className="text-blue-100/70 mb-6">
            Check whether your AI spending is optimized.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>

              <label className="block mb-2 text-sm text-blue-100/80">
                User Type
              </label>

              <select
                value={userType}
                onChange={(e) =>
                  setUserType(e.target.value)
                }
                className="w-full bg-[#12213D] border border-white/10 rounded-2xl p-4 outline-none"
              >
                <option>Student</option>
                <option>Professional</option>
                <option>Business</option>
              </select>
            </div>
            <div>

              <label className="block mb-2 text-sm text-blue-100/80">
                AI Tool
              </label>

              <select
                value={tool}
                onChange={(e) =>
                  setTool(e.target.value)
                }
                className="w-full bg-[#12213D] border border-white/10 rounded-2xl p-4 outline-none"
              >
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>GitHub Copilot</option>
                <option>Gemini</option>
              </select>
            </div>

            <div>

              <label className="block mb-2 text-sm text-blue-100/80">
                Monthly Spend (₹)
              </label>

              <input
                type="number"
                placeholder="Enter monthly spend"
                value={cost}
                onChange={(e) =>
                  setCost(e.target.value)
                }
                className="w-full bg-[#12213D] border border-white/10 rounded-2xl p-4 outline-none placeholder:text-blue-100/40"
                required
              />
            </div>
            <div>

              <label className="block mb-2 text-sm text-blue-100/80">
                Team Size
              </label>

              <input
                type="number"
                placeholder="Enter team size"
                value={teamSize}
                onChange={(e) =>
                  setTeamSize(e.target.value)
                }
                className="w-full bg-[#12213D] border border-white/10 rounded-2xl p-4 outline-none placeholder:text-blue-100/40"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-2xl transition duration-300 hover:scale-[1.02]"
            >
              Audit My Spending
            </button>
          </form>
          {monthlyStatus !== null && (

            <div className="mt-8 space-y-5">

              <div className="grid grid-cols-2 gap-4">

                <div className={`${statusBg} border rounded-2xl p-5`}>

                  <p className="text-sm text-blue-100/60">
                    Monthly Status
                  </p>

                  <h2 className={`text-3xl font-bold mt-3 ${statusColor}`}>

                    {monthlyStatus > 0
                      ? `₹${monthlyStatus} Extra`
                      : `₹${Math.abs(monthlyStatus)} Saved`}
                  </h2>
                </div>


                <div className={`${statusBg} border rounded-2xl p-5`}>

                  <p className="text-sm text-blue-100/60">
                    Yearly Status
                  </p>

                  <h2 className={`text-3xl font-bold mt-3 ${statusColor}`}>

                    {yearlyStatus! > 0
                      ? `₹${yearlyStatus} Extra`
                      : `₹${Math.abs(yearlyStatus!)} Saved`}
                  </h2>
                </div>
              </div>
              <div className="bg-[#12213D] border border-white/10 rounded-2xl p-5 space-y-4">

                <div className="flex justify-between">
                  <span className="text-blue-100/70">
                    Recommended Spending
                  </span>

                  <span className="font-bold text-cyan-400">
                    ₹{recommendedCost}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-100/70">
                    Per Person Cost
                  </span>

                  <span className="font-bold text-white">
                    ₹{perPersonCost?.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-blue-100/70">
                    Spending Grade
                  </span>

                  <span className={`font-bold ${statusColor}`}>
                    {grade}
                  </span>
                </div>
              </div>
              <div className={`${statusBg} border rounded-2xl p-5`}>

                <p className={`${statusColor} leading-7 font-medium`}>
                  {message}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}