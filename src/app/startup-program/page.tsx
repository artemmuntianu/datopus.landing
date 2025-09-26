import { Metadata } from "next";
import { JoinStartupProgramForm } from "@/components/join_startup_program_form";

export const metadata: Metadata = {
    title: 'Startup Program - Datopus',
    description: 'Join our Startup Program and get access to premium analytics features for free'
}

export default function StartupProgramPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem]" data-ds-feature="startup-program-page">
            <div className="relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />
                
                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Startup Program
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get access to premium analytics features completely free for qualifying startups
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
                        {/* Benefits */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Program Benefits</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Free access to all Startup plan features</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Up to 1,000 Monthly Tracked Users</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Cloud hosting included</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">White glove onboarding support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Eligibility */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Eligibility Criteria</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Less than 5 years old</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Less than $1M in funding</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Less than $100K in annual revenue</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Apply Now</h2>
                        <JoinStartupProgramForm />
                    </div>
                </div>
            </div>
        </main>
    );
}