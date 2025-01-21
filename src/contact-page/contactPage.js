import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as motion from "motion/react-client";
import Box from '@mui/material/Box';
function ContactPage() {
  const [state, handleSubmit] = useForm("myzzrvgj");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
  <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}

                            >
                          <Box component="main" className="experience-box">
                           <Typography className="bungee-tint-regular" variant="h3"
                                                                               component="div" >
                                  <p>Contact Me!</p>

                                  </Typography>

    <form onSubmit={handleSubmit}>
    <Stack spacing={3}>

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address..."
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message..."
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </Stack>
    </form>

     </Box>
                              </motion.div>
  );
}
export default ContactPage;