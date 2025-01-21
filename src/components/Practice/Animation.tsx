import { motion } from 'motion/react'


import React from 'react'

const Animation = () => {
    // const [isHidden, setIsHidden] = React.useState(false)
    return (
        <motion.div className='flex flex-col items-center space-y-4 p-4 h-52'>
            {/* <AnimatePresence initial={false}>
                {isHidden ? null :
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1, opacity: 1,
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        layout={true}
                        className='bg-red-500 h-auto w-fit p-8 rounded-full'>Animation</motion.div>
                }
            </AnimatePresence>
            <motion.button
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                className='bg-purple-600 rounded-md px-1 py-2 w-24 text-white'
                whileTap={{ scale: 1.2, y: 1 }}
                onClick={() => setIsHidden(!isHidden)}
                layout={true} // This enables smooth transitions for position changes
            >
                {isHidden ? 'Show' : 'Hide'}
            </motion.button> */}
            <motion.div
                initial={{ scale: 0, y: '100vh' }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 2, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-yellow-300 overflow-hidden rounded-sm h-32 w-32' />
            <motion.div className="bg-pink-600">
                <motion.ul
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0, duration: 1 }}>
                    <motion.li
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-green-300 h-12 w-12' />
                    <motion.li
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-green-300 h-12 w-12' />
                    <motion.li
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-green-300 h-12 w-12' />
                    <motion.li
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-green-300 h-12 w-12' />
                    <motion.li
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className='bg-green-300 h-12 w-12' />
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Animation