import React from 'react'
import { Pagination as BootstrapPagination } from 'react-bootstrap'

function Pagination({
    totalProducts,
    productPerPage,
    setCurrentPage,
    currentPage
}) {

    const totalPages = Math.ceil(
        totalProducts / productPerPage
    )

    return (
        <BootstrapPagination className="justify-content-center mb-0 gap-3">

            {/* PREVIOUS */}

            <BootstrapPagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            />


            {/* PAGE NUMBERS */}

            {
                [...Array(totalPages)].map((_, index) => {

                    const page = index + 1

                    return (
                        <BootstrapPagination.Item
                            key={page}
                            active={currentPage === page}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </BootstrapPagination.Item>
                    )

                })
            }


            {/* NEXT */}

            <BootstrapPagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            />

        </BootstrapPagination>
    )
}

export default Pagination