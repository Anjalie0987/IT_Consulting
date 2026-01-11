import React, { useState } from 'react';

const JobDetailModal = ({ job, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const renderDescription = (description) => {
        if (!description) return null;

        if (typeof description === 'string') {
            return <p className="whitespace-pre-wrap leading-relaxed">{description}</p>;
        }

        if (Array.isArray(description)) {
            return description.map((block, index) => {
                if (block._type !== 'block' || !block.children) return null;
                const blockText = block.children.map(child => child.text).join('');
                return (
                    <p key={block._key || index} className="mb-4 leading-relaxed">
                        {blockText}
                    </p>
                );
            });
        }
        return <p className="text-gray-400 italic">Description format not supported.</p>;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);

            if (job?.title) formData.append('jobTitle', job.title);

            const response = await fetch('/api/job-apply', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || 'Failed to submit application');

            setSubmitStatus('success');

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-2xl">
                    <div className="mb-4 text-green-600 text-5xl">✓</div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">Application Sent!</h3>
                    <p className="text-gray-600">
                        Thanks for applying to <strong>{job?.title}</strong>. We will review your application and get back to you shortly.
                    </p>
                    <button
                        onClick={onClose}
                        className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        // 1. Fixed overlay that centers the modal
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            {/* 2. Card constrained to 90% of screen height */}
            <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl bg-white shadow-2xl">

                {/* 3. HEADER: Rigid (flex-none), stays at the top */}
                <div className="flex-none border-b px-6 py-4 flex justify-between items-start bg-white rounded-t-xl z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{job?.title}</h2>
                        <p className="text-gray-500">{job?.location} {job?.type ? `• ${job.type}` : ''}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
                        <span className="text-2xl">✕</span>
                    </button>
                </div>

                {/* 4. BODY: Scrollable (overflow-y-auto), contains Description + Form */}
                <div className="flex-1 overflow-y-auto p-6">

                    {/* Job Description */}
                    {job?.description && (
                        <div className="mb-8 border-b border-gray-200 pb-4 text-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h3>
                            {renderDescription(job.description)}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {submitStatus === 'error' && (
                            <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm border border-red-200">
                                {errorMessage}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                <input type="text" name="firstName" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                <input type="text" name="lastName" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input type="email" name="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                <input type="tel" name="phone" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                            <input type="text" name="location" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="City, Country" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV (PDF) *</label>
                            <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>

                        <div className="pt-4 border-t flex justify-end gap-3">
                            <button type="button" onClick={onClose} className="px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium" disabled={isSubmitting}>Cancel</button>
                            <button type="submit" disabled={isSubmitting} className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                                {isSubmitting ? 'Sending...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModal;