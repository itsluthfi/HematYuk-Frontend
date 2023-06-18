describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.contains('Selamat datang kembali!').should('exist');
    cy.get('.input-email').should('exist')
    cy.get('.input-password').should('exist')
    cy.get('.btn-login').should('exist')
  })

  // test login dengan masukan yang valid
  it('should allow valid login', () => {
    cy.get('.input-email').type('useriai@gmail.com')
    cy.get('.input-password').type('useriai')
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan masukan yang valid berhasil, 
    // dengan verifikasi : berpindah ke halaman home (/) dan terdapat teks ("Poin Anda")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/')
    cy.contains('Poin Anda').should('exist');
  })

  // test login dengan masukan yang tidak valid
  it('should show error on invalid login', () => {
    cy.get('.input-email').type('userTidakTerdaftar@gmail.com')
    cy.get('.input-password').type('userTidakTerdaftar')
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan masukan yang tidak valid berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

  // test login dengan tidak mengisi kolom email 
  it('should show error on invalid login', () => {
    // cy.get('.input-email').type('userTidakTerdaftar@gmail.com')
    cy.get('.input-password').type('userTidakTerdaftar')
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan tidak mengisi kolom email berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

  // test login dengan tidak mengisi kolom password 
  it('should show error on invalid login', () => {
    cy.get('.input-email').type('userTidakTerdaftar@gmail.com')
    // cy.get('.input-password').type('userTidakTerdaftar')
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan tidak mengisi kolom password berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

})