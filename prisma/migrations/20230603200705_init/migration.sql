
-- CreateTable
CREATE TABLE "productores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "numeroCedula" VARCHAR(15) NOT NULL,
    "numeroTelefono" INTEGER,
    "fechaIngresoPrograma" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" INTEGER NOT NULL,

    CONSTRAINT "productores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fincas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "comunidad" TEXT NOT NULL,
    "areaCacaoProduccion" TEXT,
    "areaCacaoDesarrollo" TEXT,
    "produccionUltimoSiclo" INTEGER NOT NULL,
    "IDProductor" INTEGER NOT NULL,

    CONSTRAINT "fincas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspectores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "numeroTelefono" INTEGER,

    CONSTRAINT "inspectores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichas" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localizacion" TEXT NOT NULL,
    "IDInspector" INTEGER NOT NULL,

    CONSTRAINT "fichas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" SERIAL NOT NULL,
    "declaracion" TEXT NOT NULL,
    "DOCDictamenFinal" TEXT NOT NULL,
    "IDFicha" INTEGER NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desicion" (
    "id" SERIAL NOT NULL,
    "dictamen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "IDDesicion" INTEGER NOT NULL,

    CONSTRAINT "Desicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeccionesFicha" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "SeccionesFicha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" SERIAL NOT NULL,
    "IDSeccionesFicha" INTEGER NOT NULL,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dato" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "IDSeccionesFicha" INTEGER NOT NULL,

    CONSTRAINT "Dato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InformacionDato" (
    "id" SERIAL NOT NULL,
    "informacion" TEXT NOT NULL,
    "descripcion" TEXT,
    "IDDato" INTEGER NOT NULL,

    CONSTRAINT "InformacionDato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "fincas" ADD CONSTRAINT "fincas_IDProductor_fkey" FOREIGN KEY ("IDProductor") REFERENCES "productores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichas" ADD CONSTRAINT "fichas_IDInspector_fkey" FOREIGN KEY ("IDInspector") REFERENCES "inspectores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_IDFicha_fkey" FOREIGN KEY ("IDFicha") REFERENCES "fichas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desicion" ADD CONSTRAINT "Desicion_IDDesicion_fkey" FOREIGN KEY ("IDDesicion") REFERENCES "Documento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seccion" ADD CONSTRAINT "Seccion_IDSeccionesFicha_fkey" FOREIGN KEY ("IDSeccionesFicha") REFERENCES "SeccionesFicha"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dato" ADD CONSTRAINT "Dato_IDSeccionesFicha_fkey" FOREIGN KEY ("IDSeccionesFicha") REFERENCES "Seccion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InformacionDato" ADD CONSTRAINT "InformacionDato_IDDato_fkey" FOREIGN KEY ("IDDato") REFERENCES "Dato"("id") ON DELETE CASCADE ON UPDATE CASCADE;
